import { useState } from "react";
import HonoredHeaders from "./HonoredHeaders";
import HonoredFilters from "./HonoredFilters";
import HonoredRow from "./HonoredRow";



const HonoredTable = ({students}) => {
    const [filters, setFilters] = useState({department: ""});

    const handleFilterChange = (key, val) => {
        setFilters((prev) => ({
            ...prev,
            [key]: val
        }));
    };

    const filtered = students.filter((student) =>
            student.department.toLowerCase().includes(filters.department.toLowerCase())
    );


    return (
        <table>
            <thead>
                <HonoredHeaders />
                <HonoredFilters filters={filters} handleFilterChange={handleFilterChange} />
            </thead>

            <tbody>
                {filtered.map((student) =>
                    <HonoredRow
                        key={student.id}
                        student={student}
                    />
                )}
            </tbody>
        </table>
    );
}
 
export default HonoredTable;