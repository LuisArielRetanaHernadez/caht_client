import './Mobal.css'

const Mobal = () => {

  return (
    <div className="mobal p-1rem rounded-10">
      <h2 className="mobal__title">Title mobal</h2>
      <p className="mobal__text">Content</p>
      <div className="mobal__buttons">
        <button className="button">Close</button>
        <button className="button">Acepta</button>
      </div>
    </div>
  )
}

export default Mobal