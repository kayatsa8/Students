const HonoredRow = ({student}) => {
    return (
        <tr>
            <td>{student.email}</td>
            <td>{student.department}</td>
            <td>{student.gpa}</td>
        </tr>
    );
}
 
export default HonoredRow;