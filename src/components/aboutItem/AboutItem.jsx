import React from 'react'
import './AboutItem.css'

export default function AboutItem({PressKey,functionality}) {
  return (
    <div className='aboutItem'>
        Press 
        <span>{PressKey}</span>
        <p>{functionality}</p>
    </div>
  )
}
