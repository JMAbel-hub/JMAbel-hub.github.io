// Global variables 
var people = [];
var salaries = [];
var increment = 0;

// Allows us to get information from the HTML page 
var $ = function (id) { return document.getElementById(id); };

/*
* Function to add an individual to a list of people and salaries 
*/
function addSalary(){
    // Gets the user input from the page
    var person = $('person').value;
    var salary = $('salary').value;
    
    // Determines if the input is valid 
    if (person == "" || salary == "" || isNaN(salary)){
        alert("Invalid input");
    }
    else {
        // Adds the person and their salary to their respective arrays
        people[increment] = person;
        salaries[increment] = parseInt(salary);
        increment++;
    }
    // Resets the page to its default 
    document.getElementById("person").value = "Jeremy Abel";
    document.getElementById("salary").value = "";
}

/*
* Function to print the average salary and highest salary amongst employees 
*/
function displayResults(){
    // If there is currently no listed salaries, print an error message 
    if (!salaries.length){
       alert("There are no employees listed with a salary")
    }
    else{
        // Initialize variables 
        var highestPerson, highestSalary, average
        highestSalary = salaries[0];
        highestPerson = people[0];
        average = 0;
        // Stores the highest value in the values array 
        for (var i = 0; i < salaries.length; i++){
            if (highestSalary < salaries[i]){
                highestSalary = salaries[i];
                highestPerson = people[i];
            }
            average += salaries[i];
        }
        average = average/salaries.length;
        // Returns a formatted message that html can use 
        var output = "<h2>Results </h2> <p><strong>Average Salary</strong>: $" + average + "<br><strong>Highest Salary</strong>: " + highestPerson + " with a salary of $" + highestSalary + "</p>";
        $('results').innerHTML = output;
    }
}

/*
* Function to display the salary of everyone listed with a salary in a table
*/
function displaySalary(){
    // If there is currently no listed salaries, print an error message 
    if (!salaries.length){
        alert("There are no employees listed with a salary")
    }
    else{
        // Creates a table of every person and their salaries
        var output = "<h2>Salaries</h2><tr><th>Employee</th><th>Salary</th></tr> ";
        for (var i = 0; i < salaries.length; i++){
            output = output + "<tr><td>" + people[i] + "</td><td>$" + salaries[i] + "</td></tr>"
        }
        // Returns the table to the html page 
        $('salaries_table').innerHTML = output;
    }
}

// Sets up the buttons on the index page to reference methods in arrays.js
window.onload = function() {
    $("add").onclick = addSalary;
    $("display_results").onclick = displayResults;
    $("display_salaries").onclick = displaySalary;
}