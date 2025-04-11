import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditStudent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const student = location.state;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("SOFTWARE_ENGINEERING");
    const [gpa, setGpa] = useState(0);
    const [departments, setDepartments] = useState({});
    const [isPending, setIsPending] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false); // TODO: toast


    const handleBackClick = () => {
        navigate("/");
    };

    const handleSubmit = (event) => {

    }


    useEffect(() => {
        axios.get("http://localhost:8080/api/students/departments")
                .then((response) => {
                    if(response.status !== 200){
                        throw new Error(response.statusText);
                    }

                    return response.data;
                })
                .then((data) => {
                    setDepartments(() => data);
                })
                .catch((err) => {
                    setError(() => err);
                });
    }, []);




    return (
        <div>
            <button onClick={handleBackClick}>Back</button>

            <h2>Edit Student</h2>

            <form onSubmit={handleSubmit}>
                <label>First Name: </label>
                <input
                    type="text"
                    value={firstName}
                    placeholder="Frodo"
                    onChange={(e) => setFirstName(() => e.target.value)}
                />

                <label>Last Name: </label>
                <input
                    type="text"
                    value={lastName}
                    placeholder="Baggins"
                    onChange={(e) => setLastName(() => e.target.value)}
                />

                <label>Email: </label>
                <input
                    type="text"
                    value={email}
                    placeholder="bagginsf@gmail.com"
                    onChange={(e) => setEmail(() => e.target.value)}
                />

                <label>Department: </label>
                <select value={department} onChange={(e) => setDepartment(() => e.target.value)}>
                    {Object.entries(departments).map(([dep, depName]) => 
                        <option key={dep} value={dep}>{depName}</option>
                    )}
                </select>

                <label>GPA: </label>
                <input
                    type="number"
                    value={gpa}
                    placeholder={82.13}
                    onChange={(e) => setGpa(() => e.target.value)}
                />

                <button>Add</button>
            </form>

            {isPending && <p>pending...</p>}
        </div>
    );
}
 
export default EditStudent;