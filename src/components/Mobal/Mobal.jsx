import { useEffect, useRef, useState } from 'react'
import './Mobal.css'

const Mobal = () => {
  const [close, setClose] = useState(false)

  const mobal = useRef(null)

  useEffect(() => {
    if (mobal.current) {
      if (close) {
        mobal.current.classList.add('mobal--close')
      } else {
        mobal.current.classList.remove('mobal--close')
      }
    }
  }, [close])

  return (
    <div ref={mobal} className="mobal text-center p-5 rounded-10">
      <h2 className="mobal__title pb-5">Title mobal</h2>
      <p className="mobal__text pb-5">Content</p>
      <div className="mobal__buttons pb-5">
        <button
          onClick={() => setClose(true)}
         className="button button--white px-5 py-5">Close</button>
        <button className="button button--gray-teel px-5 py-5">Acepta</button>
      </div>
    </div>
  )
}

export default Mobal