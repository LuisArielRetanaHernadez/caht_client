/* eslint-disable react/prop-types */
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

const CloudinaryWidget = ({ uwConfig, setPublicId }) => {
  const [loaded, setLoaded] = useState(false)

  const widgetRef = useRef(null)

  useEffect(() => {
    if (loaded) return
    const script = document.createElement("script")
    script.src = "https://upload-widget.cloudinary.com/global/all.js"
    script.async = true
    script.onload = () => {
      setLoaded(true)
    }
    document.body.appendChild(script)
    return () => {
      setLoaded(false)
      document.body.removeChild(script)
    }
  }, [loaded])

  const initCloudinaryWidget = () => {
    if (!loaded) return
    widgetRef.current = window.cloudinary.createUploadWidget({
      cloudName: uwConfig,
      uploadPreset: "preteminado",
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
    <button className="button" onClick={initCloudinaryWidget}>
      Subir
    </button>
  )
}

export default CloudinaryWidget
