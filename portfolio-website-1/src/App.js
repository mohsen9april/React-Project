import React from 'react'
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/portfolio/Portfolio';
import Skill from './components/Skill';
import './App.css';


const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skill/>
    </div>
  )
}

export default App