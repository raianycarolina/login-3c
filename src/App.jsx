import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

import hbo from './assets/HBO_logo.png'
import tela from './assets/hbo-tela.webp'

function App() {
  return (
    <div className="Div1">

      <img src={tela} alt="" id="tela" />

      <div className="lado-direito">
        <img src={hbo} alt="" id="hbo"/>

        <h1>Login</h1>
      
        <input type="text" placeholder="Usuário..." />
        <input type="password" placeholder="Senha..." />

        

        <button className="app-button">ENTRAR</button>
      
        <a href="#">
          <h3>Esqueceu a senha?</h3>
        </a>
        <h5>
          Não tem conta? <Link to="/cadastro">Cadastrar-se</Link>
        </h5>
      </div>

    </div>
  )
}

export default App