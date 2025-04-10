import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [gpa, setGpa] = useState(null);


    const handleBackClick = () => {
        navigate("/");
    };



    return (
        <div>
            <button onClick={handleBackClick}>Back</button>

            <h2>Add Student</h2>

            <form>
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

                {/* TODO: make select */}
                <label>Department: </label>
                <input
                    required
                    type="text"
                    value={department}
                    placeholder=""
                    onChange={(e) => setEmail(() => e.target.value)}
                />

                <label>GPA: </label>
                <input
                    required
                    type="number"
                    value={gpa}
                    placeholder={82.13}
                    onChange={(e) => setGpa(() => e.target.value)}
                />
            </form>
        </div>
    );
}
 
export default AddStudent;