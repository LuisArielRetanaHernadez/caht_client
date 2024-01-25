// styles
import './InputMessage.css';

const InputMessage = () => {
  return (
    <div className="input-message">
      <input className="input-message__message" type="text" placeholder="Send Message...." />
      <button className="button-message">Send</button>
    </div>
  )

}

export default InputMessage;
