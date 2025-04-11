import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentTable from "../Components/StudentsTable/StudentTable";
import axios from "axios";

const StudentsView = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();
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


    const excellent = students.filter((student) => student.gpa >= 90);

    const handleAddStudentClick = () => {
        navigate("add");
    };



    return (
        <div>
            <h2>Students</h2>
            <StudentTable students={students} initSort={{col: "id", direction: "asc"}}/>

            <h2>Excellent Students</h2>
            <StudentTable students={excellent} initSort={{col: "gpa", direction: "desc"}}/>

            <button onClick={handleAddStudentClick}>Add Student</button>
        </div>
    );
}
 
export default StudentsView;