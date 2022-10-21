import './App.css';
import Login from './componentes/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PaginaPrincipal } from './componentes/paginaPrincipal/PaginaPrincipal';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
