import CloudinaryWidget from "../../components/widgetCloudinary/CloudinaryWidget"
import { useState } from 'react'
import cld from "../../utils/cloudinary/cloudinary"
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react"

const UploadProfile = () => {
  const [publicId, setPublicId] = useState('')

  return (
    <section>
      <div>
        <h2>Upload Profile</h2>
        <div>
          <AdvancedImage
            style={{ width: "100px", height: "100px" }}
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
