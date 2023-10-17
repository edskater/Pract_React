import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from'./components/Tasklist'
import TaskForm from "./components/TaskForm";
import Navbar from './components/Navbar'
import {Container} from '@mui/material'
import Footer from "./components/Footer";

export default function App(){
  return(
    <BrowserRouter>
    <Navbar/>
      <Container>
      <Routes>
          <Route path="/" element={<TaskList/>}/>
          <Route path="/new" element={<TaskForm/>}/>
      </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  )
}


