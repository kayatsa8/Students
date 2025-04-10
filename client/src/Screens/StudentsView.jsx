import { useEffect, useState } from "react";
import StudentTable from "../Components/StudentTable";
import axios from "axios";

const StudentsView = () => {
    const [students, setStudents] = useState([]);



    useEffect(() => {
        
    }, []);








    return (
        <div>
            <StudentTable students={students}/>
        </div>
    );
}
 
export default StudentsView;