import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import LogIn from "./components/Login";
import HOME from "./components/Home_optr_suprv";

export default function App(){
  return(
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
          <Route path="/" element={<LogIn/>}/>
          <Route path="/home" element={<HOME/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  )
}


