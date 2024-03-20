// bepaald waar de kogel is in de magazijn van p1 
let magazijnpositieP1 = 0;
let kogelpositieP1 = Math.floor(Math.random() * 6) + 1;

// bepaald waar de kogel is in de magazijn van p2
let magazijnpositieP2 = 0;
let kogelpositieP2 = Math.floor(Math.random() * 6) + 1;

//array voor de foto van p1 en p2 
let fotoSpelers = [document.querySelector("#p1foto"), document.querySelector("#p2foto")];

const schietGeluid = new Audio("Sounds/pewsound.mp3");
const leegGeluid = new Audio("Sounds/leegwapen.mp3");
const winGeluid = new Audio("Sounds/gewonnensounds.mp3");

let schietknopP1 = document.querySelector("#schietp1");
let schietknopP2 = document.querySelector("#schietp2");

//functie voor het schieten en draaien van de magazijn p1
function player1Schiet() {
    if (magazijnpositieP1 === kogelpositieP1) {
        fotoSpelers[1].src = "foto/5.png"; 
        schietGeluid.play();
        setTimeout(winsound, 1000);
    } else {
        fotoSpelers[1].src = "foto/6.png"; 
        fotoSpelers[0].src = "foto/1.png"; 
        leegGeluid.play();
    }
    magzijnDraaien(0); 
}

//functie voor het schieten en draaien van de magazijn p2
function player2Schiet() {
    if (magazijnpositieP2 === kogelpositieP2) {
        fotoSpelers[0].src = "foto/3.png"; 
        schietGeluid.play();
        setTimeout(winsound, 1000);
    } else {
        fotoSpelers[1].src = "foto/4.png"; 
        fotoSpelers[0].src = "foto/2.png";
        leegGeluid.play();
    }
    magzijnDraaien(1); 
}

function winsound() {
    winGeluid.play();
}

// hier wordt bepaald welke magazijn moet draaien als speler index 0 is 
function magzijnDraaien(spelerIndex) {
    if (spelerIndex === 0) {
        magazijnpositieP1++;
    } else {
        magazijnpositieP2++;
    }
}

schietknopP1.addEventListener("click", player1Schiet);
schietknopP2.addEventListener("click", player2Schiet);

let startKnop = document.querySelector("#start");

schietknopP1.style.display = "none";
schietknopP2.style.display = "none";

function hide() {
    startKnop.style.display = "none";
    schietknopP1.style.display = "block";
    
}

startKnop.addEventListener("click", hide);

let namen = ["Fa2man", "Badman"];

let speler1Naam = document.getElementById("player1");
let speler2Naam = document.getElementById("player2");

// geeft de naam aan de juiste speler. index geeft aan welke speler het is
namen.forEach((naam, index) => {
    if (index === 0 && speler1Naam) {
        speler1Naam.innerHTML = naam;
    } else if (index === 1 && speler2Naam) {
        speler2Naam.innerHTML = naam;
    }
});

let beurtP1 = true;
let beurtP2 = false;

//beurten van spelers
function switchTurns() {
    beurtP1 = !beurtP1; //niet beurt p1 
    beurtP2 = !beurtP2; // niet beurt p2

// bepalen wie aan de beurt is en de knop weghalen
    if (beurtP1) {
        schietknopP1.style.display = "block";
        schietknopP2.style.display = "none";
    } else {
        schietknopP1.style.display = "none";
        schietknopP2.style.display = "block";
    }
}

schietknopP1.addEventListener("click", switchTurns);
schietknopP2.addEventListener("click", switchTurns);

// bron geluiden: 
// wingeluid: https://www.youtube.com/watch?v=Y5H4Das52wk
// leeg magazijn geluid: https://www.youtube.com/watch?v=FdLpenwXnBE
// pew geluid: https://www.youtube.com/watch?v=JZAkxE-eR88