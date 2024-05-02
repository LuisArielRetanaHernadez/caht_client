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

import './UploadProfile.css'

const UploadProfile = () => {
  const profile = useSelector(state => state.user.photo)

  const [photo, setphoto] = useState(
    profile ?? 'https://res.cloudinary.com/dqmkovsdy/image/upload/v1712350100/chat/photo_profile_default/epspfzghsr7md5dlci32.jpg'
  )
  // const [photoCurrent, setPhotoCurrent] = useState(photo)

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
    const currentPhoto = profile

    if (currentPhoto !== photo) {
      handleUpload()
    }
    
  }, [photo])

  return (
    <section className="wrapped wrapped--menu-min-h wrapped--flex-center">
      <div className="card">
        <h2 className="card__title">Upload Profile</h2>
        <div className="image__box">
          <div className="widget__image-content">
            <AdvancedImage
              className="widget__image"
              src={photo}
              plugins={[responsive(), placeholder()]}
            />
            <CloudinaryWidget className="widget__button-upload" setPublicId={setphoto}/>
          </div>
        </div>


        <div className="flex gap-10">
          <button className="button" onClick={handleUpload}>Save</button>
        </div>

      </div>
    </section>
  )
}

export default UploadProfile
