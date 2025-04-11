import { useNavigate, useLocation } from "react-router-dom";

const EditStudent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const student = location.state;


    const handleBackClick = () => {
        navigate("/");
    };

    return (
        <div>
            <button onClick={handleBackClick}>Back</button>
        </div>
    );
}
 
export default EditStudent;