// function to add to the calculation 
function displayTry(value) {
    document.getElementById("calculation").value += value;
}

// function to clear the screen on the try calculator
function clearScreenTry() {
    document.getElementById("calculation").value = "";
}

// function that calculates what is in the try calculator
function calculateTry() {
    var p = document.getElementById("calculation").value;
    var q = eval(p);
    document.getElementById("calculation").value = q;
}
