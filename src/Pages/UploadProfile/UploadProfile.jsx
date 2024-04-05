import CloudinaryWidget from "../../components/widgetCloudinary/CloudinaryWidget"
import { useState } from 'react'
import cld from "../../utils/cloudinary/cloudinary"
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react"

const UploadProfile = () => {
  const [publicId, setPublicId] = useState('')

  return (
    <section className="wrapped wrapped--menu-min-h wrapped--flex-center">
      <div>
        <h2>Upload Profile</h2>
        <div>
          <AdvancedImage
            style={{ width: "200px", height: "200px", borderRadius: '50%', objectFit: "cover" }}
            cldImg={cld.image(publicId)}
            plugins={[responsive(), placeholder()]}
           />
        </div>
          <CloudinaryWidget setPublicId={setPublicId}/>
      </div>
    </section>
  )
}

export default UploadProfile
