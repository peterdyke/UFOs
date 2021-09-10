// import data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create function to build table data
function buildTable(data) {
    // First clear any existing data in table
    tbody.html("");

    // Loop through each object in data and append
    // a row and cells for each value in row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and
        // add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// Create new function to add filters when a click happens
function handleClick() {
    // Grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if date was entered and filter
    // the data using that date
    if (date) {
        // Apply filter to table data to only keep the rows
        // where datetime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild table using filtered data. ** If no data was entered
    // then filterData will just be original tableData
    buildTable(tableData);
};

// Attach an even to listen for the form button
d3.selectAll("filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);