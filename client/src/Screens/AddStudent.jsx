import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import "../css/AddStudent.css";

const AddStudent = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("SOFTWARE_ENGINEERING");
    const [gpa, setGpa] = useState(0);
    const [departments, setDepartments] = useState({});
    const [isPending, setIsPending] = useState(false);


    const handleBackClick = () => {
        navigate("/");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsPending(() => true);

        const student = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            department: department,
            gpa: gpa
        }

        axios.post("http://localhost:8080/api/students/add", student)
                .then((response) => {
                    if(response.status !== 201){
                        throw new Error(response.statusText);
                    }

                    setIsPending(() => false);
                    
                    toast.success("Success!", {
                        position: "bottom-left",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
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

                    setIsPending(() => false);
                });
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



    return (
        <div className="addStudent">
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

                <button className="addButton">Add</button>
            </form>

            {isPending && <p>pending...</p>}
        </div>
    );
}
 
export default AddStudent;