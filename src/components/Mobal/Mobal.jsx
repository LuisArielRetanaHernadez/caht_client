import { useEffect, useRef, useState } from 'react'
import './Mobal.css'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { clearError } from '../../features/error/errorSlice'

const Mobal = () => {
  const [close, setClose] = useState(false)

  const mobal = useRef(null)

  const dispatch = useDispatch()

  const {
    message,
    status,
    isError
  } = useSelector(state => state.error)

  useEffect(() => {
    closeMobal()
  }, [])

  const closeMobal = () => {
        if (mobal.current) {
      if (isError) {
        mobal.current.classList.add('mobal--close')
      } else {
        mobal.current.classList.remove('mobal--close')
        dispatch(clearError)
      }
    }
  } 

  return (
    <div ref={mobal} className="mobal text-center p-5 rounded-10">
      <h2 className="mobal__title pb-5">{status ?? 'error'}</h2>
      <p className="mobal__text pb-5">{message}</p>
      <div className="mobal__buttons pb-5">
        <button
          onClick={() => closeMobal()}
         className="button button--white px-5 py-5">Close</button>
        <button className="button button--gray-teel px-5 py-5">Acepta</button>
      </div>
    </div>
  )
}

export default Mobal