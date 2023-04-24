
import React from "react";

import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Dashboard from "../pages/Dashboard";
import Student from "../pages/Student";
import StudentForm from "./studentForm";

function App(){

    return <>
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/students" element={<Student/>} />
            <Route path="/studentForm" element={<StudentForm/>} />
        </Routes>

       </BrowserRouter>
    </>
}

export default App;