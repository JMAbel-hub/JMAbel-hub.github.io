function homeDisplay(){
    //if the selected section isn't visible
    if (document.getElementById("home").style.display === "none"){
        document.getElementById("home").style.display = "block";
    }
    //removes the other sections from visibility 
    document.getElementById("cuphead").style.display = "none";
    document.getElementById("elden_ring").style.display = "none";
    document.getElementById("league_of_legends").style.display = "none";
    document.getElementById("overwatch").style.display = "none";
    document.getElementById("counter_strike").style.display = "none";
}

function eldenRingDisplay(){
    //if the selected section isn't visible
    if (document.getElementById("elden_ring").style.display === "none"){
        document.getElementById("elden_ring").style.display = "inline";
    }
    //removes the other sections from visibility
    document.getElementById("home").style.display = "none";
    document.getElementById("cuphead").style.display = "none";
    document.getElementById("league_of_legends").style.display = "none";
    document.getElementById("overwatch").style.display = "none";
    document.getElementById("counter_strike").style.display = "none";
}

function leagueOfLegendsDisplay(){
    //if the selected section isn't visible
    if (document.getElementById("league_of_legends").style.display === "none"){
        document.getElementById("league_of_legends").style.display = "inline";
    }
    //removes the other sections from visibility 
    document.getElementById("cuphead").style.display = "none";
    document.getElementById("elden_ring").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("overwatch").style.display = "none";
    document.getElementById("counter_strike").style.display = "none";
}

function overwatchDisplay(){
   //if the selected section isn't visible
    if (document.getElementById("overwatch").style.display === "none"){
        document.getElementById("overwatch").style.display = "inline";
    }
    //removes the other sections from visibility 
    document.getElementById("home").style.display = "none";
    document.getElementById("elden_ring").style.display = "none";
    document.getElementById("league_of_legends").style.display = "none";
    document.getElementById("cuphead").style.display = "none";
    document.getElementById("counter_strike").style.display = "none";
}

function counterStrikeDisplay(){    
    //if the selected section isn't visible
    if (document.getElementById("counter_strike").style.display === "none"){
        document.getElementById("counter_strike").style.display = "inline";
    }
    //removes the other sections from visibility 
    document.getElementById("home").style.display = "none";
    document.getElementById("elden_ring").style.display = "none";
    document.getElementById("league_of_legends").style.display = "none";
    document.getElementById("overwatch").style.display = "none";
    document.getElementById("cuphead").style.display = "none";
}
    
function cupheadDisplay(){
    //if the selected section isn't visible
    if (document.getElementById("cuphead").style.display === "none"){
        document.getElementById("cuphead").style.display = "block";
    }
    //removes the other sections from visibility 
    document.getElementById("home").style.display = "none";
    document.getElementById("elden_ring").style.display = "none";
    document.getElementById("league_of_legends").style.display = "none";
    document.getElementById("overwatch").style.display = "none";
    document.getElementById("counter_strike").style.display = "none";
}