import SideNav from "../components/SideNav";

import {MdPeople} from "react-icons/md";
import {GiTeacher} from "react-icons/gi";
import {MdHomeFilled} from "react-icons/md";

function Dashboard(){

    return <div>
          <SideNav/>

        <div className="main">
            <div className="row p-3">

                <div className="col-4" >
                    
                    <div className="box bg-primary p-5 rounded">
                    <h3>Students</h3>
                    <MdPeople size="2em" color="white"/>               
                    </div>
                    </div>

                <div className="col-4 ">
                <div className="box bg-warning p-5 rounded" >
                    <h3>Teachers</h3>
                    <GiTeacher size="2em" color="white"/>
               
                    </div>
                </div>

                <div className="col-4 ">
                <div className="box bg-success p-5 rounded">
                    <h3>Classes</h3>
                    <MdHomeFilled size="2em" color="white"/>
               
                    </div>
                </div>
                
               
            </div>


     
        </div>
      
    </div>
}

export default Dashboard;