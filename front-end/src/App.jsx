import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './componentes/home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import SingleVehicle from "./componentes/singleVehicle/SingleVehicle.jsx"
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleVehicle/:id" element={<SingleVehicle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
