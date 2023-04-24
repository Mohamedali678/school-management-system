import React from "react";
import {MdDashboard, MdPerson} from "react-icons/md";
import {FaBookOpen} from "react-icons/fa";
import {GiTeacher} from "react-icons/gi";
import {AiOutlineLogout} from "react-icons/ai";
import {FaReact} from "react-icons/fa";

import {Link } from "react-router-dom";



function SideNav(){

    return <div className="sidenav">

        <div className="logo">
            <FaReact />
            <h3>Hi Anas</h3>
        </div>

           <ul>
            
            <li> <Link to="/" className="nav-link">  <MdDashboard/> Dashboard</Link></li>
            <li> <Link to="/students" className="nav-link"> <MdPerson/> Students </Link> </li>
            <li><GiTeacher/> Teachers</li>
            <li><FaBookOpen/> Classes</li>
            <li><AiOutlineLogout/> Logout</li>
            
            </ul> 

    </div>
}

export default SideNav;