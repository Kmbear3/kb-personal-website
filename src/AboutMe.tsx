import { useState } from 'react'
import './App.css'
import KassBarramPic from './assets/KassBarramPic.JPG'

function AboutMe() {
  return (
    <>
        <div>
            <a href="https://vite.dev" target="_blank">
            <img src={KassBarramPic} className="logo" alt="Vite logo" />
            </a>
        </div>
    </>
  )
}

export default AboutMe