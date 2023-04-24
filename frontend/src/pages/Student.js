import { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import {Link} from "react-router-dom";
import axios from 'axios';
import {MdDelete} from "react-icons/md";
import {AiTwotoneEdit} from "react-icons/ai";
function Student(){

    const [students, setStudents] = useState([""]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {

        axios.get("http://localhost:1000/students").then((response) => {
            console.log(response.data);
            setStudents(response.data);
        })
        
    }

     //this is search api
     const searchStudent = (event) => {
        const key = event.target.value;

        //checking if there is data
        if(key){
            axios.post(`http://localhost:1000/search/${key}`).then(response => {
                console.log(response.data)
     
                if(response.data){
                 setStudents(response.data);
                }
             }).catch(error => {
                 console.log(error);
             })
        }

        else {
            getData();
        }   
    }

    const deleteStudent = (_id) => {
        console.log(_id);

         axios.delete(`http://localhost:1000/delete/${_id}`).then(response => {
           
         console.log(response.data)
            if(response.data){
                alert("deleted");

                getData();
               
            }

        }).catch(error => {
            console.log(error);
        })

    }
  
    return <div>
        <SideNav/>
        <div className="main">
            <h2>This is students</h2>

            <div className="row1">
                <div className="box2">

                <Link to="/studentForm" className="btn btn-primary">Add Student</Link>
                </div>

                <div className="box1">

                <input type="" placeholder="Search by ID, Name" className="form-control border"
               
               onChange={searchStudent}

                />
                </div>

            </div>

            <table className="table table-striped">

                <thead className="thead-dark my-5">

                    <tr className="bg-light p-4">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Address</th>
                    <th>Guardian</th>
                    <th>Number</th>
                    <th>Action</th>
                    <th>Action</th>
                    </tr>
                </thead>

                <tbody className="p-3">
                   
                {  
                   students.length > 0 ? students.map(index => (

                        <tr key={index._id} className="my-4" >
                        <td> {index.id} </td>
                        <td>{index.name}</td>
                        <td>{index.studetClass}</td>
                        <td>{index.address}</td>
                        <td>{index.guardian}</td>
                        <td> {index.number} </td>

                        <td> <button onClick={() => deleteStudent(index._id)} className="btn btn-danger"> <MdDelete size="1em"/> </button> </td>
                        <td> <Link to={"/updateStudent/" + index._id} className="btn btn-success"> <AiTwotoneEdit size="1em"/> </Link> </td>

                        </tr>
                    ))

                    : <p className="text-center">No matched</p>
                
                } 

                </tbody>

            </table>
        </div>


    </div>
    
}

export default Student;