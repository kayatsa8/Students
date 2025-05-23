const StudentRow = ({student, setStudentToEdit}) => {
    return (
        <tr onClick={() => setStudentToEdit(() => student)}>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.email}</td>
            <td>{student.department}</td>
            <td>{student.gpa}</td>
        </tr>
    );
}
 
export default StudentRow;