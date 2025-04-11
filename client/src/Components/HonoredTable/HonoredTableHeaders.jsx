const HonoredTableHeaders = () => {
    return (
        <tr>
            <th onClick={() => sortColumn("email")}>Email {getSortArrow("email")}</th>
            <th onClick={() => sortColumn("department")}>Department {getSortArrow("department")}</th>
            <th onClick={() => sortColumn("gpa")}>GPA {getSortArrow("gpa")}</th>
        </tr>
    );
}
 
export default HonoredTableHeaders;