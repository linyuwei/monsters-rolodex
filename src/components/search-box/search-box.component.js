import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange}) => (
  <input 
    type='search' 
    placeholder={placeholder}
    onChange={handleChange}
      // onChange={this.setState({searchField: e.target.value})}
      // onChange={e => console.log(e.target.value)}>
  />
)
 