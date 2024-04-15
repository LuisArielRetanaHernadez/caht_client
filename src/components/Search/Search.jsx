/* eslint-disable react/prop-types */

// react hooks
import { useState } from 'react'

// stytle -> Search.css
import './Search.css'

// style -> index.css
import '../../index.css'

const Search = ({onSubmit}) => {

  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(value)
    setValue('')
  }

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <div className="search__wrappe search__wrappe--gap-04rem">
          <input className="input input--search rounded-10 flex-1" type="text" placeholder="Search" onChange={(e) => setValue(e.target.value)} value={value} />
          <button className="button button--search rounded-10" type="submit">Search</button>
        </div>
      </form>
    </>
  )
}

export default Search
