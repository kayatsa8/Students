import { useState } from "react";
import StudentRow from "./StudentRow";
import TableHeaders from "./TableHeaders";

const StudentTable = ({students}) => {
    const [sortConfig, setSortConfig] = useState({col: null, direction: "asc"});
    const [filters, setFilters] = useState({firstName: "", lastName: "", department: ""});

    
    const sortColumn = (col) => {
        let direction = 'asc';

        if(sortConfig.col === col && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        setSortConfig({col: col, direction: direction});
    };

    const getSortArrow = (col) => {
        if(sortConfig.col !== col){
            return "";
        }
        
        if(sortConfig.direction === "asc"){
            return "🔼";
        }
        else{
            return "🔽"
        }
    };

    const handleFilterChange = (key, val) => {
        setFilters((prev) => ({
            ...prev,
            [key]: val
        }));
    };

    const filtered = students.filter((student) => 
        Object.entries(filters).every(([key, value]) => {
            if(value === ""){
                return true;
            }
            else{
                return String(student[key]).toLowerCase().includes(value.toLowerCase());
            }
        })
    );

    const sortedStudents = [...filtered].sort((s1, s2) => {
        const {col, direction} = sortConfig;

        if(col === null){
            return -1;
        }

        if (s1[col] <= s2[col]){
            return direction === 'asc' ? -1 : 1
        }
        else{
            return direction === 'asc' ? 1 : -1
        };
    });

    



    return (
        <table>
            <thead>
                <TableHeaders sortColumn={sortColumn} getSortArrow={getSortArrow}/>
                <tr>
                    <th />
                    <th>
                        <input
                            type="text"
                            placeholder="first name"
                            value={filters.firstName}
                            onChange={(e) => handleFilterChange("firstName", e.target.value)}
                        />
                    </th>
                    <th>
                        <input
                            type="text"
                            placeholder="last name"
                            value={filters.lastName}
                            onChange={(e) => handleFilterChange("lastName", e.target.value)}
                        />
                    </th>
                    <th />
                    <th>
                        <input
                            type="text"
                            placeholder="department"
                            value={filters.department}
                            onChange={(e) => handleFilterChange("department", e.target.value)}
                        />
                    </th>
                    <th />
                </tr>
            </thead>

            <tbody>
                {sortedStudents.map((student) => <StudentRow key={student.id} student={student}/>)}
            </tbody>
        </table>
    );
}
 
export default StudentTable;