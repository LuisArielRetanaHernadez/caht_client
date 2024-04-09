/* eslint-disable react-hooks/exhaustive-deps */
import CloudinaryWidget from "../../components/widgetCloudinary/CloudinaryWidget"
import { useEffect, useState } from 'react'
import cld from "../../utils/cloudinary/cloudinary"
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react"
import { uploadImageProfile, verifyUserByIdAndAuth } from "../../utils/api/user"

import { useNavigate  } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setError } from "../../features/error/errorSlice"

import { useParams } from "react-router-dom"

const UploadProfile = () => {
  const [publicId, setPublicId] = useState('chat/photo_profile_default/epspfzghsr7md5dlci32')
  const [errorUpload, setErrorUpload] = useState(false)

  const { id } = useParams()

  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      const user = await verifyUserByIdAndAuth(id)
      if (user.status === 401) {
        navigate('/login')
      }
    }
  
    verifyUser()
  },[id])
  
  const handleUpload = async () => {
    if (!publicId) return

    const imgUpload = await uploadImageProfile(publicId)
    if (imgUpload.response.status === 401) {
      setErrorUpload(true)
      dispatch(setError({message: 'error upload', statusCode: 401}))
    }

    if  (imgUpload.response.status === 200) {
      setErrorUpload(false)
      navigate('/')
    }
  }

  useEffect(() => {
    if (!publicId) return
    handleUpload(publicId)
  }, [publicId])

  return (
    <section className="wrapped wrapped--menu-min-h wrapped--flex-center">
      <div className="card">
        <h2 className="card__title">Upload Profile</h2>
        <div>
          <AdvancedImage
            style={{ width: "200px", height: "200px", borderRadius: '50%', objectFit: "cover",
              border: "1px solid #ccc",
            }}
            cldImg={cld.image(publicId)}
            plugins={[responsive(), placeholder()]}
           />
        </div>
        <div className="flex gap-10">
          <CloudinaryWidget setPublicId={setPublicId}/>
          <button className="button" onClick={handleUpload}>Save</button>
        </div>

      </div>
    </section>
  )
}

export default UploadProfile
