import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import LogIn from "./components/Login";
import HOME from "./components/Home_optr_suprv";
import Backuppassword from "./components/Backup-password";
import Registro_Nv from "./components/Registro_Nv";

export default function App(){
  return(
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
          <Route path="/" element={<LogIn/>}/>
          <Route path="/home" element={<HOME/>}/>
          <Route path="/recuperar-contrasena" element={<Backuppassword/>}/>
          <Route path="/Registro_Nv" element={<Registro_Nv/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  )
}


