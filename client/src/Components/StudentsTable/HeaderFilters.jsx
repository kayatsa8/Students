const HeaderFilters = ({filters, handleFilterChange}) => {
    return (
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
    );
}
 
export default HeaderFilters;