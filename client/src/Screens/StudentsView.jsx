import StudentTable from "../Components/StudentTable";

const StudentsView = () => {
    const students = [
        {
            id: 1,
            firstName: "Frodo",
            lastName: "Baggins",
            email: "bagginsf@shiremail.com",
            gpa: 80
        },
        {
            id: 2,
            firstName: "Frodo",
            lastName: "Baggins",
            email: "bagginsf@shiremail.com",
            gpa: 80
        },
        {
            id: 3,
            firstName: "Frodo",
            lastName: "Baggins",
            email: "bagginsf@shiremail.com",
            gpa: 80
        }
    ];

    return (
        <div>
            <StudentTable students={students}/>
        </div>
    );
}
 
export default StudentsView;