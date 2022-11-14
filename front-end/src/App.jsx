import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './componentes/home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import SingleVehicle from "./componentes/singleVehicle/SingleVehicle.jsx"
import SingleVehicleReserva from './componentes/SingleVehicleReserva/SingleVehicleReserva';
import { DateProvider } from './context/DateContext';
function App() {


  return (
      <DateProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singleVehicle/:id" element={<SingleVehicle />} />
            <Route path="/singleVehicle/:id/reserva" element={<SingleVehicleReserva/>} />
          </Routes>
        </BrowserRouter>
      </DateProvider>
  )
}

export default App