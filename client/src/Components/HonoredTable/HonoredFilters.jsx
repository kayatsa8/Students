const HonoredFilters = () => {
    return (
        <tr>
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
 
export default HonoredFilters;