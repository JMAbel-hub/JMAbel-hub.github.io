/*
* Function to alert the user the shape they input
*/
function getShape(numSides){
    // converts user input into a positiveinteger
    var intNumSides = Math.abs(parseInt(numSides.value));
    // references a method to check if an entry is a number
    if (validateEntry(intNumSides)){
        // selects the shape based upon the entry
        switch(intNumSides){
            case 1:
                alert("Your shape is a Henagon");
                break;
            case 2:
                alert("Your shape is a Digon");
                break;
            case 3:
                alert("Your shape is a Trigon");
                break;
            case 4:
                alert("Your shape is a Tetragon");
                break;
            case 5:
                alert("Your shape is a Pentagon");
                break;
            case 6:
                alert("Your shape is a Hexagon");
                break;
            case 7:
                alert("Your shape is a Heptagon");
                break;
            case 8:
                alert("Your shape is a Octagon");
                break;
            case 9:
                alert("Your shape is a Enneagon");
                break;
            case 10:
                alert("Your shape is a Decagon")
                break;
        }
    }
}

/*
* Function to validate the user input
*/
function validateEntry(intNumSides){
    // checks if the entry is a number
    if (isNaN(intNumSides)){
        return false;
    }
    // checks if the entry is a valid number
    if (intNumSides <= 0 || intNumSides > 10){
        return false;
    }
    //  valid entry
    return true;
}
