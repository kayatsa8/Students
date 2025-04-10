import StudentRow from "./StudentRow";

const StudentTable = ({students}) => {
    return (
        <table>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>GPA</th>
            </tr>

            {students.map((student) => <StudentRow student={student}/>)}
        </table>
    );
}
 
export default StudentTable;