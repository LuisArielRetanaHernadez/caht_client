/* eslint-disable react/prop-types */

// styles
import './Message.css';

const Message = ({
  message,
  author,

}) => {
    return (
        <>
        <article className="message message--rounded-10px">
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

export default Message;
