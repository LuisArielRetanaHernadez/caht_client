/* eslint-disable react/prop-types */
import { createContext, useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

const CloudinaryWidget = ({ setPublicId }) => {
  const [loaded, setLoaded] = useState(false)

  const CloudinaryScriptContext = createContext()

  const widgetRef = useRef(null)
  const cloudinaryRef = useRef(null)

  useEffect(() => {
    if (!loaded) {
      
      const script = document.createElement("script")
      script.src = "https://upload-widget.cloudinary.com/global/all.js"
      script.async = true
      script.onload = () => {
        setLoaded(true)
      }
      document.body.appendChild(script)
    } else {
      setLoaded(true)
    }
    return () => {
      setLoaded(false)
    }
  }, [])

  const initCloudinaryWidget = () => {
    if (!loaded) return

    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dqmkovsdy',
      uploadPreset: "replicate",
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        setPublicId(result.info.public_id)
      }
    })

    if (widgetRef.current) {
      widgetRef.current.open()
    }
  }



  return (
    <CloudinaryScriptContext.Provider value={{loaded}}>
      <button className="button" onClick={initCloudinaryWidget}>
        Subir
      </button>
    </CloudinaryScriptContext.Provider>

  )
}

export default CloudinaryWidget
