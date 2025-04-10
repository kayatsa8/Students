import { useEffect, useState } from "react";
import StudentTable from "../Components/StudentTable";
import axios from "axios";

const StudentsView = () => {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState(null);



    useEffect(() => {
        axios.get("http://localhost:8080/api/students/get/all")
                .then((response) => {
                    if(response.status !== 200){
                        throw new Error(response.statusText);
                    }

                    return response.data;
                })
                .then((data) => {
                    setStudents(() => data);
                })
                .catch((err) => {
                    setError(() => err);
                });
    }, []);








    return (
        <div>
            <StudentTable students={students} setStudents={setStudents}/>
        </div>
    );
}
 
export default StudentsView;