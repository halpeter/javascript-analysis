# javascript-challenge

## Background

For this project, I was tasked to write code that will create a table dynamically based upon a [dataset we provide](StarterCode/static/js/data.js). I also needed to allow the users to filter the table data for specific values. 

## My Task

### Level 1: Automatic Table and Date Search (Required)

* I created a basic HTML web page seen at [Index.html](UFO-level-1/index.html)

* Using the [UFO dataset](UFO-level-1/static/js/data.js) provided in the form of an array of JavaScript objects, I wrote code that appends a table to my web page and then adds new rows of data for each UFO sighting.

  * I made sure to include the following columns `date/time`, `city`, `state`, `country`, `shape`, and `comment`.

* I used a date form in my HTML document and wrote JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search Categories (Optional)

After completing all of Level 1 criteria, I enhanced the user's capabilities by:

* Using multiple `input` tags and/or select dropdowns, I wrote JavaScript code so the user can  set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`


