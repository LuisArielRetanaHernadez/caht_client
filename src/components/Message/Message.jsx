/* eslint-disable react/prop-types */

// react hooks
import { useEffect, useState } from 'react';

// react redux
import { useSelector } from 'react-redux';

// styles
import './Message.css';


const Message = ({
  content,
  author,
}) => {
  const [isAuthor, setIsAuthor] = useState(false);

  const { user } = useSelector(state => state.user)

  useEffect(() => {
    if (user.username === author.username) {
      setIsAuthor(true)
    } else {
      setIsAuthor(false)
    }
    return () => {
      setIsAuthor(false)
    } 
    
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [content])

  return (
    <>
    <article className={`message message--rounded-10px ${isAuthor ? 'message--float-right' : 'message--float-left'} `}>
      <header className="message__header">
        <div className={`avatar avatar--message ${isAuthor ? 'avatar--message-left' : 'avatar--message-right'}`}>
          <img 
          src='https://images.pexels.com/photos/15005609/pexels-photo-15005609/free-photo-of-puesta-de-sol-hombre-silueta-tarde.jpeg' 
          className='avatar__img avatar__img--message' />
        </div>
        <h4 className={`message__name ${isAuthor ? 'message__name--left' : ''}`}>{author.username}</h4>
        <ul className="message__options">
          <li className="message__option">
            <button className="" href="#">Edit</button>
          </li>
          <li className="message__option">
            <button className="" href="#">Delete</button>
          </li>
        </ul>
      </header>
      <p className="message__content">{content}</p>
    </article>
    </>
  )

}

export default Message;
