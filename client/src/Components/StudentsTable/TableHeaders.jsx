const TableHeaders = () => {
    return (
        <tr>
            <th onClick={() => sortColumn("id")}>Id {getSortArrow("id")}</th>
            <th onClick={() => sortColumn("firstName")}>First Name {getSortArrow("firstName")}</th>
            <th onClick={() => sortColumn("lastName")}>Last Name {getSortArrow("lastName")}</th>
            <th onClick={() => sortColumn("email")}>Email {getSortArrow("email")}</th>
            <th onClick={() => sortColumn("department")}>Department {getSortArrow("department")}</th>
            <th onClick={() => sortColumn("gpa")}>GPA {getSortArrow("gpa")}</th>
        </tr>
    );
}
 
export default TableHeaders;