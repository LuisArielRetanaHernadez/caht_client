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
        <div className="search__wrappe">
          <input className="search__input search__input--rounded outline-none" type="text" placeholder="Search" onChange={(e) => setValue(e.target.value)} value={value} />
          <button className="button button--search" type="submit">Search</button>
        </div>
      </form>
    </>
  )
}

export default Search
