/* eslint-disable react/prop-types */
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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

  const options = {
    showAdvancedOptions: true,
    cropping: true,
    multiple: false,
    autoUpload: false,
    sources: ['local', 'url', 'camera', 'image_search', 'facebook', 'dropbox', 'instagram', 'shutterstock', 'google_photos', 'google_drive', 'evernote', 'flickr', 'box'],
  }

  const initCloudinaryWidget = () => {
    if (!loaded) return

    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dqmkovsdy',
      uploadPreset: "replicate",
      ...options,
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        setPublicId(result.info.url)
      }
    })

    if (widgetRef.current) {
      widgetRef.current.open()
    }
  }



  return (
    <CloudinaryScriptContext.Provider value={{loaded}}>
      <FontAwesomeIcon icon={faArrowUpFromBracket} onClick={initCloudinaryWidget}/>
    </CloudinaryScriptContext.Provider>

  )
}

export default CloudinaryWidget
