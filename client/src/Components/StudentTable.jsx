import { useState } from "react";
import StudentRow from "./StudentRow";

const StudentTable = ({students, setStudents}) => {
    const [sortConfig, setSortConfig] = useState({col: null, direction: "asc"});

    
    const sortColumn = (col) => {
        let direction = 'asc';

        if(sortConfig.col === col && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedStudents = [...students].sort((s1, s2) => {
            if (s1[col] < s2[col]) return direction === 'asc' ? -1 : 1;
            if (s1[col] > s2[col]) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setStudents(sortedStudents);
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



    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => sortColumn("id")}>Id {getSortArrow("id")}</th>
                    <th onClick={() => sortColumn("firstName")}>First Name {getSortArrow("firstName")}</th>
                    <th onClick={() => sortColumn("lastName")}>Last Name {getSortArrow("lastName")}</th>
                    <th onClick={() => sortColumn("email")}>Email {getSortArrow("email")}</th>
                    <th onClick={() => sortColumn("gpa")}>GPA {getSortArrow("gpa")}</th>
                </tr>
            </thead>

            <tbody>
                {students.map((student) => <StudentRow key={student.id} student={student}/>)}
            </tbody>
        </table>
    );
}
 
export default StudentTable;