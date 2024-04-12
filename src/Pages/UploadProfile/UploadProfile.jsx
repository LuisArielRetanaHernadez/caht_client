/* eslint-disable react-hooks/exhaustive-deps */
import CloudinaryWidget from "../../components/widgetCloudinary/CloudinaryWidget"
import { useEffect, useState } from 'react'
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react"
import { uploadImageProfile, verifyUserByIdAndAuth } from "../../utils/api/user"

import { useNavigate  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setError } from "../../features/error/errorSlice"

import { useParams } from "react-router-dom"
import { updatePhotoUser } from "../../features/user/userSlice"

const UploadProfile = () => {
  const [photo, setphoto] = useState('https://res.cloudinary.com/dqmkovsdy/image/upload/v1712350100/chat/photo_profile_default/epspfzghsr7md5dlci32.jpg')
  const [photoCurrent, setPhotoCurrent] = useState(photo)

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
    if (!photo) return

    const imgUpload = await uploadImageProfile(id, photo)

    if (imgUpload.status === 401) {
      dispatch(setError({message: 'error upload', statusCode: 401}))
    }

    if  (imgUpload.status === 'success') {
      dispatch(updatePhotoUser(photo))
      navigate('/')
    }
  }

  useEffect(() => {
    setPhotoCurrent(prev => {
      if (prev !== photo) {
        handleUpload()
        return photo
      }
      return prev
    })
  }, [photo])

  return (
    <section className="wrapped wrapped--menu-min-h wrapped--flex-center">
      <div className="card">
        <h2 className="card__title">Upload Profile</h2>
        <div>
          <AdvancedImage
            style={{ width: "200px", height: "200px", borderRadius: '50%', objectFit: "cover",
              border: "1px solid #ccc",
            }}
            src={photo}
            plugins={[responsive(), placeholder()]}
           />
        </div>
        <div className="flex gap-10">
          <CloudinaryWidget setPublicId={setphoto}/>
          <button className="button" onClick={handleUpload}>Save</button>
        </div>

      </div>
    </section>
  )
}

export default UploadProfile
