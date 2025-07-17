import React from 'react'
import './App.css';
const Header = ({title}) => {

  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}
Header.defaultProps={
  title:"TO DO LIST"
}
export default Header