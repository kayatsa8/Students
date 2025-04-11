import { useEffect, useState } from "react";
import HonoredTable from "../Components/HonoredTable/HonoredTable";
import NavBar from "../Components/NavBar";
import axios from "axios";

const HonoredView = () => {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState(null);
    const [isTop, setIsTop] = useState(false);



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

    const handleTopClick = () => {
        setIsTop((top) => !top);
    }

    const honored = students.filter((student) => student.gpa >= 90);
    
    const topStudents = Object.values(
        honored.reduce((acc, student) => {
            const department = student.department;

            if(!acc[department] || acc[department].gpa < student.gpa){
                acc[department] = student;
            }

            return acc;
        }, {})
    );

    const toShow = !isTop ? honored : topStudents;


    return (
        <div>
            <NavBar />

            <h2>Honored Candidates</h2>
            <HonoredTable students={toShow}/>

            {!isTop && <button onClick={handleTopClick}>Top Students</button>}
            {isTop && <button onClick={handleTopClick}>All Honored Students</button>}
        </div>
    );
}
 
export default HonoredView;