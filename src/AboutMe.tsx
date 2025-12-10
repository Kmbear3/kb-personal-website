import { useState } from 'react'
import './App.css'
import KassBarramPic from './assets/KassBarramPic.JPG'

function AboutMe() {
  return (
    <>
        <div>
            <img src={KassBarramPic} className="logo" alt="Vite logo" />
        </div>
    </>
  )
}

export default AboutMe