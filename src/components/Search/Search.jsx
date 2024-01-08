// stytle
import './Search.css'

const Search = () => {

  return (
    <>
      <form className="search">
        <div className="search-wrappe">
          <input className="search-input" type="text" placeholder="Search" />
          <button className="search-button" type="submit">Search</button>
        </div>
      </form>
    </>
  )
}

export default Search
