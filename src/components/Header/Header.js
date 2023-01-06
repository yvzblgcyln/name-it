import React from 'react'
import "./Header.css"

function Header({ isFilled }) {
  return (
    <div className='head-container'>

      <img className={`${isFilled ? "head-image-small" : "head-image-default"}`}
        src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png' />

      <h1 className={`${isFilled ? "head-text-small" : "head-text-default"}`}> Name It</h1>

    </div>
  )
}

export default Header