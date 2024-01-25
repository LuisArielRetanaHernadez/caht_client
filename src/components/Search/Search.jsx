/* eslint-disable react/prop-types */
// stytle
import './Search.css'
import '../../index.css'
import { useState } from 'react'

const Search = ({onSubmit}) => {

  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setValue('')
    onSubmit(value)
  }

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <div className="search-wrappe">
          <input className="search-input" type="text" placeholder="Search" onChange={(e) => setValue(e.target.value)} value={value} />
          <button className="search-button" type="submit">Search</button>
        </div>
      </form>
    </>
  )
}

export default Search
