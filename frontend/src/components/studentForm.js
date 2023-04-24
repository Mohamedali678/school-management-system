import { useState } from "react";
import SideNav from "./SideNav";

import axios from "axios";
import { useNavigate } from "react-router-dom";


function StudentForm(){

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [address, setAddress] = useState("");
    const [guardian, setGuardian] = useState("");
    const [number, setNumber] = useState("");


    const navigate = useNavigate();


    const saveData = async (event) => {
        event.preventDefault();

        axios.post("http://localhost:1000/register", {
            id: id,
            name: name,
            studentClass: studentClass,
            address: address,
            guardian: guardian,
            number: number
        }).then((response) => {

            console.log(response.data)

        }).catch((error) => {
            console.log(error);
        })

        navigate("/students")
        
    }
    
    return <div>
        <SideNav/>

        <div className="main">
            <h3 className="py-3">Register new student</h3>

            <form className="form-control p-5 w-75">

                <label className="fs-4 my-2">ID</label>
                <input type="text" className="form-control" value={id} 
                
                onChange={event => {
                    setId(event.target.value)
                }}
                
                />

                <label className="fs-4 my-2">Name</label>
                <input type="text" className="form-control" value={name}

                onChange={event => {
                    setName(event.target.value)
                }}
                
                />
                <label className="fs-4 my-2">Class</label>
                <input type="text" className="form-control" value={studentClass}
                 onChange={event => {
                    setStudentClass(event.target.value)
                }}
                />
                <label className="fs-4 my-2">Address</label>
                <input type="text" className="form-control"  value={address} 
                 onChange={event => {
                    setAddress(event.target.value)
                }}
                />
                <label className="fs-4 my-2">Guardian</label>
                <input type="text" className="form-control" value={guardian} 
                 onChange={event => {
                    setGuardian(event.target.value)
                }}

                />
                <label className="fs-4 my-2">Number</label>
                <input type="text" className="form-control" value={number}
                 onChange={event => {
                    setNumber(event.target.value)
                }}
                />

                <button className="btn btn-success my-4 px-5 fs-3" onClick={saveData}>Save</button>

            </form>
            
        </div>
    </div>
}

export default StudentForm;