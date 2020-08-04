import React from 'react'
import { Searchbar } from 'modules/searchbar'

import './Search.scss'

const Search = () => (
  <div className="search-page">
    <h2 className="search-page__header">Enter a City and State</h2>
    <Searchbar display="vertical" />
  </div>
)

export default Search
