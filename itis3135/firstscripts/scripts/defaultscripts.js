function currentDate(){
    var today = new Date();
    document.getElementById("date").innerHTML = "Today is " + today.toLocaleString();
}

function  welcomeMessage(event){
    event.preventDefault();
    var name = document.getElementById('name').value
    var emotion = document.getElementById('emotion').value
    document.getElementById("welcome").innerHTML = "The Jade Alligator's welcomes you, " + name + "!\nWe're glad you are doing " + emotion;
}

function scriptTest(){
    alert("Hey my script is running");
}


function sumNumber(){
    var firstNumber = window.prompt("Enter your first number: ");
    var secondNumber = window.prompt("Enter your second number: ");
    var sum = parseInt(firstNumber) + parseInt(secondNumber);
    alert("The sum of " + firstNumber + " + " + secondNumber + " = " + sum);
}

function calculateTax(){
    var taxPercent = window.prompt("Input the percentage tax: ");
    var priceInput = window.prompt("Enter the price you will apply tax to: ");
    var tax = parseFloat(priceInput) * (parseFloat(taxPercent) * .01);
    var afterTax = parseFloat(priceInput) + parseFloat(tax);
    alert("Total after tax: $" + afterTax);
}

function alligatorPun(){
    var randomNumber = Math.floor(Math.random() * (6 - 1)) + 1;
    switch(randomNumber){
        case 1:
            alert("What is a nerdy alligator’s favorite programming language?\nJaw-va");
            break;
        case 2:
            alert("What does an alligator do when he loses his tail?\nIt goes to a re-tail store.");
            break;
        case 3:
            alert("What do alligators and Windows have in common?\nNeither of them has enough bytes!");
            break;
        case 4:
            alert("What do you call a crocodile that likes to bowl?\nAn alley-gator!");
            break;
        case 5:
            alert("What do dehydrated alligators drink?\nGatorade.");
            break;
        default:
            alert("An error occurred");
            break;7
    }   
}

function openLogo(){
    window.open("https://i.imgur.com/4smuaGm.jpeg");
}

function randomNumber(){
    var floor = window.prompt("Enter the floor number: ");
    var ceiling = window.prompt("Enter the ceiling number: ");
    var randomNumber = Math.floor(Math.random() * ((parseInt(ceiling)+1) - parseInt(floor))) + parseInt(floor);
    alert("Your random number is " + randomNumber);
}
