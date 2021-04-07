// from data.js
var tableData = data;

// View data from data.js file
console.log(data);

// Create References for table
var $tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Inputing the data into the HTML
data.forEach((ufoSightings) => {
    var row = $tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, columns]) => {
      var cell = row.append("td");
      cell.text(columns);
    });
  });


// Creating an Event Listener for the Button
// Setting up the Filter Button for Date 

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

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

    // $tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        filterDate.forEach(function(search) {
            console.log(search);
            var row = $tbody.append('tr');
            Object.entries(search).forEach(function([key, columns]) {
                var cell = row.append('td');
                cell.text(value);
            });
        });

    }

    // Top if only works for filtering the date
    
    else {
        $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
    }

}

// button.on("click", () => {

//     d3.event.preventDefault();
    

//     var inputDate = inputFieldDate.property("value").trim();
//     // console.log(inputDate)
//     // https://www.w3schools.com/jsref/jsref_tolowercase.asp
//     // var inputCity = inputFieldCity.property("value").toLowerCase().trim();
//     // console.log(inputCity)
//     // var inputState = inputFieldState.property("value").toLowerCase().trim();
//     // var inputCountry = inputFieldCountry.property("value").toLowerCase().trim();
//     // var inputShape = inputFieldShape.property("value").toLowerCase().trim();
    

//     var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

//     $tbody.html("");

//     let response = {
//         filterDate
//     }


//     if(response.filterDate.length !== 0) {
//         addData(filterDate);
//     }

//     // Top if only works for filtering the date
    
//         else {
//             $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
//         }
// })


