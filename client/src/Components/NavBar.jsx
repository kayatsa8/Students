import { Link } from "react-router-dom";
import "../css/NavBar.css"

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to={"/"}>Students</Link>
            <span> | </span>
            <Link to={"/honored"}>Honor-Candidates</Link>
        </div>
    );
}
 
export default NavBar;