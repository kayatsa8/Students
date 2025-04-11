import HonoredTable from "../Components/HonoredTable/HonoredTable";
import NavBar from "../Components/NavBar";

const HonoredView = () => {
    return (
        <div>
            <NavBar />

            <h2>Honored Candidates</h2>
            <HonoredTable students={[]}/>
        </div>
    );
}
 
export default HonoredView;