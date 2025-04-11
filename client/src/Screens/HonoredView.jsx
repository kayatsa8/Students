import { useEffect, useState } from "react";
import HonoredTable from "../Components/HonoredTable/HonoredTable";
import NavBar from "../Components/NavBar";
import axios from "axios";

const HonoredView = () => {
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

    const honored = students.filter((student) => student.gpa >= 90);


    return (
        <div>
            <NavBar />

            <h2>Honored Candidates</h2>
            <HonoredTable students={honored}/>
        </div>
    );
}
 
export default HonoredView;