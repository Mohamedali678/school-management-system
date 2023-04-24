
import {React, useState} from "react";
import SideNav from "./SideNav";

function UpdateStudent(){

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [address, setAddress] = useState("");
    const [guardian, setGuardian] = useState("");
    const [number, setNumber] = useState("");


    const updateData = () => {
        
    }

    return  <div>
    <SideNav/>

    <div className="main">
        <h3 className="py-3">Update student</h3>

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

            <button className="btn btn-success my-4 px-5 fs-3" onClick={updateData}>Save</button>

        </form>
        
    </div>
</div>
}


export default UpdateStudent;