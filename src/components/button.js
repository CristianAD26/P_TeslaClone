import React from 'react'
import './button.css'

const Button = ({ imp, text, link }) => {
  return (
    <a href={link} className={`button ${imp === 'secondary' ? 'button_white' : ''}`}>
      <div>
        {text}
      </div>
    </a>
  )
}

export default Button
