import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './componentes/home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import SingleVehicle from "./componentes/singleVehicle/SingleVehicle.jsx"
import SingleVehicleReserva from './componentes/SingleVehicleReserva/SingleVehicleReserva';
import { DateProvider } from './context/DateContext';
import { SkeletonTheme } from 'react-loading-skeleton';
import { AuthContextProvider } from './context/AuthContext';
import CreacionProducto from './componentes/CreacionProducto/CreacionProducto';



function App() {

  return (
    <AuthContextProvider>
      <DateProvider>
        <SkeletonTheme duration={3.5} baseColor="gray" highlightColor="#444">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singleVehicle/:id" element={<SingleVehicle />} />
            <Route path="/singleVehicle/:id/reserva" element={<SingleVehicleReserva/>} />
            <Route path="/administracion" element={<CreacionProducto />} />
          </Routes>
        </BrowserRouter>
        </SkeletonTheme>
      </DateProvider>
    </AuthContextProvider>
  )
}

export default App