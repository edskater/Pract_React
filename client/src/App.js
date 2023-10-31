import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import LogIn from "./components/Login";
import HOME from "./components/Home_optr_suprv";
import Backuppassword from "./components/Backup-password";
import Registro_Nv from "./components/Registro_Nv";
import Registro_Nv_moral from "./components/Registro_Nv_moral";
import Archivo_dgtl from "./components/Archivo_dgtl";
import Archivo_dgtl_moral from "./components/Archivo_dgtl_moral";
import Completar_registro from "./components/Completar_registro";
import Datos_Biom from "./components/Datos_biometricos";
import Editar_regist from "./components/Editar_registro";
import Editar_registro_moral from "./components/Editar_registro_moral";
import Revocacion from "./components/Revocacion";
import Consulta_registro from "./components/Consulta_registro"


export default function App(){
  return(
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
          <Route path="/" element={<LogIn/>}/>
          <Route path="/home" element={<HOME/>}/>
          <Route path="/recuperar-contrasena" element={<Backuppassword/>}/>
          <Route path="/Registro_Nv" element={<Registro_Nv/>}/>
          <Route path="/Registro_Nv_moral" element={<Registro_Nv_moral/>}/>
          <Route path="/Archivo_dgtl_moral" element={<Archivo_dgtl_moral/>}/>
          <Route path="/Archivo_dgtl" element={<Archivo_dgtl/>}/>
          <Route path="/Completar_Registro" element={<Completar_registro/>}/>
          <Route path="Consultar_Registro" element={<Consulta_registro/>}/>
          <Route path="/Datos_Biometricos" element={<Datos_Biom/>}/>
          <Route path="/Editar_Regist" element={<Editar_regist/>}/>
          <Route path="/Editar_Regist_Moral" element={<Editar_registro_moral/>}/>
          <Route path="/Revocacion" element={<Revocacion/>}/>
          <Route path="/Consultar_Registro" element={<Consulta_registro/>}/>


      </Routes>
      
      <Footer/>
    </BrowserRouter>
  )
}


