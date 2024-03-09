import './Mobal.css'

const Mobal = () => {

  return (
    <div className="mobal text-center p-5 rounded-10">
      <h2 className="mobal__title pb-5">Title mobal</h2>
      <p className="mobal__text pb-5">Content</p>
      <div className="mobal__buttons pb-5">
        <button className="button button--white px-5 py-5">Close</button>
        <button className="button">Acepta</button>
      </div>
    </div>
  )
}

export default Mobal