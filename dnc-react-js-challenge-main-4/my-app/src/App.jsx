import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header'
import Tasks from './componentes/Tasks'
import Inputs from './componentes/Inputs'
import Todo from './componentes/Todo'

function App() {

  return (
    <div>
      <Header></Header>
      <h1 className='Title'>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <Tasks></Tasks>
      <Inputs></Inputs>
      <Todo></Todo>
    </div>
  )
}

export default App
