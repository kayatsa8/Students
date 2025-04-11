import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddStudent = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("SOFTWARE_ENGINEERING");
    const [gpa, setGpa] = useState(0);
    const [departments, setDepartments] = useState({});


    const handleBackClick = () => {
        navigate("/");
    };

    const handleSubmit = () => {

    };

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

            <h2>Add Student</h2>

            <form onSubmit={handleSubmit}>
                <label>First Name: </label>
                <input
                    required
                    type="text"
                    value={firstName}
                    placeholder="Frodo"
                    onChange={(e) => setFirstName(() => e.target.value)}
                />

                <label>Last Name: </label>
                <input
                    required
                    type="text"
                    value={lastName}
                    placeholder="Baggins"
                    onChange={(e) => setLastName(() => e.target.value)}
                />

                <label>Email: </label>
                <input
                    required
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
                    required
                    type="number"
                    value={gpa}
                    placeholder={82.13}
                    onChange={(e) => setGpa(() => e.target.value)}
                />

                <button>Add</button>
            </form>
        </div>
    );
}
 
export default AddStudent;