/* eslint-disable react/prop-types */
const Meesage = ({
  message,
  author,

}) => {
    return (
        <>
        <article>
          <header>
            <h4>{author}</h4>
            <ul>
              <li>
                <a href="#">Edit</a>
              </li>
              <li>
                <a href="#">Delete</a>
              </li>
            </ul>
          </header>
          <p>{message}</p>
        </article>
        </>
    )

}

export default Meesage;
