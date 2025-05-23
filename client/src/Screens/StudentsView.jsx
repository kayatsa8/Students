import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentTable from "../Components/StudentsTable/StudentTable";
import axios from "axios";
import { toast } from 'react-toastify';
import "../css/StudentsView.css"

const StudentsView = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();
    const [studentToEdit, setStudentToEdit] = useState(null);


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
                    toast.error(err.message, {
                        position: "bottom-left",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                });
    }, []);


    const excellent = students.filter((student) => student.gpa >= 90);

    const handleAddStudentClick = () => {
        navigate("/add");
    };

    const handleEditStudent = () => {
        navigate("/edit", {state: studentToEdit});
    };



    return (
        <div className="studentView">
            <h2>Students</h2>
            <StudentTable
                students={students}
                initSort={{col: "id", direction: "asc"}}
                setStudentToEdit={setStudentToEdit}
            />

            <h2>Excellent Students</h2>
            <StudentTable
                students={excellent}
                initSort={{col: "gpa", direction: "desc"}}
                setStudentToEdit={setStudentToEdit}
            />

            <button onClick={handleAddStudentClick}>Add Student</button>
            {studentToEdit && <button onClick={handleEditStudent}>Edit {`${studentToEdit.firstName} ${studentToEdit.lastName} (${studentToEdit.id})`}</button>}
        </div>
    );
}
 
export default StudentsView;