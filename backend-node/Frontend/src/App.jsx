import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import CadastroLivros from './assets/components/CadastroLivros'
import CadastroAlunos from './assets/components/CadastroAlunos'
import CadastroEmprestimo from './assets/components/CadastroEmprestimo'
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to ="/">Inicio</Link></li>
          <li><Link to ="/livros">Livros</Link></li>
          <li><Link to ="/alunos">Alunos</Link></li>
          <li><Link to ="/emprestimos">Emprestimos</Link></li>
        </ul>
      </nav>
      
      <Routes>
        {/*<Route path="/" element={<p>Escolha um cadastro no menu.</p>} />*/}
        
        <Route path="/" element={
          <div className="inicio">
            <h1>Sistema de Biblioteca</h1>
            <p>Bem-vindo ao sistema de gerenciamento!</p>
            <p>Escolha uma opção no menu para começar.</p>
          </div>
        } />

        <Route path="/livros" element={<CadastroLivros />} />
        <Route path="/alunos" element={<CadastroAlunos />} />
        <Route path="/emprestimos" element={<CadastroEmprestimo />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
