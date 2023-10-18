
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from'./components/Tasklist'
import TaskForm from "./components/TaskForm";


export default function HOME(){
  return(

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<TaskList/>}/>
          <Route path="/home" element={<TaskForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}
