import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from'./components/Tasklist'
import TaskForm from "./components/TaskForm";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";

export default function App(){
  return(
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
          <Route path="/" element={<TaskList/>}/>
          <Route path="/home" element={<TaskForm/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  )
}


