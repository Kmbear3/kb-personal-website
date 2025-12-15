import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import AboutMe from './AboutMe'
import Contact from './Contact'
import './index.css'
import App from './App.tsx'
import RouteCollection from "./RouteCollection.tsx";
import ResponsiveAppBar from './ResponsiveAppBar.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    {/* <ResponsiveAppBar /> */}
    <BrowserRouter>
        <ResponsiveAppBar />
        <RouteCollection/>
    </BrowserRouter>
  </>
)
