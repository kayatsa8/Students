import StudentRow from "./StudentRow";

const StudentTable = ({students}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>GPA</th>
                </tr>

                {students.map((student) => <StudentRow key={student.id} student={student}/>)}
            </tbody>
        </table>
    );
}
 
export default StudentTable;