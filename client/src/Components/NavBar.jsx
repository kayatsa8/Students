import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to={"/"}>Students</Link>
            <Link to={"/honored"}>Honored Candidates</Link>
        </div>
    );
}
 
export default NavBar;