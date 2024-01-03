/* eslint-disable react/prop-types */
const Meesage = ({
  message,
  author,

}) => {
    return (
        <>
        <article className="message">
          <header className="message__header">
            <h4 className="message__name">{author}</h4>
            <ul className="message__options">
              <li className="message__option">
                <button className="message__button" href="#">Edit</button>
              </li>
              <li className="message__option">
                <button className="message__button" href="#">Delete</button>
              </li>
            </ul>
          </header>
          <p className="message__content">{message}</p>
        </article>
        </>
    )

}

export default Meesage;
