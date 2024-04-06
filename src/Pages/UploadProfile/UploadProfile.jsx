import CloudinaryWidget from "../../components/widgetCloudinary/CloudinaryWidget"
import { useState } from 'react'
import cld from "../../utils/cloudinary/cloudinary"
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react"
import { uploadImageProfile } from "../../utils/api/user"

import { Navigate } from 'react-router-dom'

const UploadProfile = () => {
  const [publicId, setPublicId] = useState('chat/photo_profile_default/epspfzghsr7md5dlci32')
  const [errorUpload, setErrorUpload] = useState(false)

  
  const handleUpload = async () => {
    if (!publicId) return
    const imgUpload = await uploadImageProfile(publicId)
    if (imgUpload.status === 401) {
      setErrorUpload(true)
    }
    if  (imgUpload.status === 200) {
      setErrorUpload(false)
      return <Navigate to="/" />
    }
  }

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
          <CloudinaryWidget setPublicId={setPublicId}/>
          <button className="button" onClick={handleUpload}>Save</button>
      </div>
    </section>
  )
}

export default UploadProfile
