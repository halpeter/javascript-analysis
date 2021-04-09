// from data.js
var tableData = data;

// View data from data.js file
console.log(data);

// Create References for table
var tbody = d3.select('tbody');

// Create a function tp input the data into the HTML
function makeTable(d) {
    d.forEach((ufoSightings) => {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
}
    
// Creating an Event Listener for the Button
// Setting up the Filter Button for Date 

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter () {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputDate = inputElement.property("value");

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);

    console.log(filterDate);

    let response = {
        filterDate
    }

    // Display only filtered data in table
    if(response.filterDate.length !== 0) {
        makeTable(filterDate)
    }

    // If filter date is outside of data then show error
    else {
        tbody.append("tr").append("td").text("No Sightings Here...Try a date within the range: 1/1/2010 and 1/13/2010");
    }

}

// Show data in the table on the website
makeTable(data)


