import { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import {Link} from "react-router-dom";
import axios from 'axios';

function Student(){

    const [students, setStudents] = useState([]);

    const getData = () => {

        axios.get("http://localhost:1000/students").then((response) => {

            console.log(response.data);

            setStudents(response.data);
        })
        
    }

    useEffect(() => {
        getData();
    }, [])

    return <div>
        <SideNav/>
        <div className="main">
            <h2>This is students</h2>
            <Link to="/studentForm" className="btn btn-primary m-3">Add Student</Link>

            <table className="table table-striped">

                <thead className="thead-dark my-5">

                    <tr className="bg-light p-4">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Address</th>
                    <th>Guardian</th>
                    <th>Number</th>
                    </tr>
                </thead>

                <tbody className="p-3">
                   
                {  
                    students.map((index) => (
                        <tr className="my-4">
                        <td> {index.id} </td>
                        <td>{index.name}</td>
                        <td>{index.studetClass}</td>
                        <td>{index.address}</td>
                        <td>{index.guardian}</td>
                        <td> {index.number} </td>

                        </tr>
                    ))
                
                } 

                </tbody>

            </table>
        </div>


    </div>
    
}

export default Student;