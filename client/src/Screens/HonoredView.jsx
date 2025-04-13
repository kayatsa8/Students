import { useEffect, useState } from "react";
import HonoredTable from "../Components/HonoredTable/HonoredTable";
import axios from "axios";
import { toast } from 'react-toastify';
import "../css/HonoredView.css";

const HonoredView = () => {
    const [students, setStudents] = useState([]);
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
                    toast.error(err, {
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
        <div className="honoredView">
            <h2>Honor-Candidates</h2>
            <HonoredTable students={toShow}/>

            {!isTop && <button onClick={handleTopClick}>Top Students</button>}
            {isTop && <button onClick={handleTopClick}>All Honored Students</button>}
        </div>
    );
}
 
export default HonoredView;