import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';

const EditStudent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const student = location.state;
    const [firstName, setFirstName] = useState(student.firstName);
    const [lastName, setLastName] = useState(student.lastName);
    const [email, setEmail] = useState(student.email);
    const [department, setDepartment] = useState(student.department);
    const [gpa, setGpa] = useState(student.gpa);
    const [departments, setDepartments] = useState({});
    const [isPending, setIsPending] = useState(false);


    const handleBackClick = () => {
        navigate("/");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsPending(() => true);

        const updated = {id: student.id};

        if(firstName !== student.firstName){
            updated["firstName"] = firstName;
        }
        if(lastName !== student.lastName){
            updated["lastName"] = lastName;
        }
        if(email !== student.email){
            updated["email"] = email;
        }
        if(department !== student.department){
            updated["department"] = firsdepartmenttName;
        }
        if(gpa !== student.gpa){
            updated["gpa"] = gpa;
        }

        axios.patch("http://localhost:8080/api/students/update", updated)
                .then((response) => {
                    if(response.status !== 200){
                        throw new Error(response.statusText);
                    }

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
                })
                .finally(() => {
                    setIsPending(() => false);
                })

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
        <div>
            <button onClick={handleBackClick}>Back</button>

            <h2>Edit Student</h2>

            <form onSubmit={handleSubmit}>
                <label>First Name: </label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(() => e.target.value)}
                />

                <label>Last Name: </label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(() => e.target.value)}
                />

                <label>Email: </label>
                <input
                    type="text"
                    value={email}
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
                    onChange={(e) => setGpa(() => e.target.value)}
                />

                <button>Confirm Edit</button>
            </form>

            {isPending && <p>pending...</p>}
        </div>
    );
}
 
export default EditStudent;