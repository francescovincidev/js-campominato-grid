// DICHIARAZIONI
const playBtn = document.querySelector("div button");
let box = document.querySelector(".box");
let squareDimension = document.getElementsByClassName("square");
let arrayDimension;
let arrayNumbers = [];

// EVENTI AL CLICK
playBtn.addEventListener("click", function () {
    
    // reset griglia
    arrayNumbers = [];
    box.innerHTML = "";

    //  prende il valore della difficoltà
    const difficulty = document.getElementById("difficulty").value;
    
    // SE difficile
    if (difficulty === "difficile") {


        // diamo 100 alla dimensione dall'array
        arrayDimension = 100;

    } else if( difficulty === "medio"){

        // diamo 81 alla dimensione dall'array
        arrayDimension = 81;
        
    } else{ 

        // diamo 49 alla dimensione dall'array
        arrayDimension = 49;
        
    }

    arrayNumbers = gridDimension(arrayDimension);

    // creazione della tabella
    for(let i=0; i < arrayNumbers.length; i++){
        let newsquare = gridCreation(arrayNumbers[i]);
        box.append(newsquare);
        squareDimension[i].classList.add(`s-${arrayDimension}`);
        squareDimension[i].addEventListener("click", backgroundBlue);
   }
    

})


// FUNCTIONS

/**
 * Description
 * @param {number} gridNumber
 * @returns {array}
 */
function gridDimension(gridNumber) {

    for (let i = 1; i <= gridNumber; i++) {
        arrayNumbers[i-1] = i;
        
    }

    return arrayNumbers;   
}

// creazione div con classe square e contenuto da input
/**
 * Description
 * @param {text} text
 * @returns {text}
 */
function gridCreation(text) {
    let newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.innerHTML = `<span>${text}</span>`;  
    return newSquare;
}

// aggiungere classe blue al all'elemento che selezioniamo
/**
 * Description
 * @returns {any}
 */
function backgroundBlue() {
    this.classList.add("blue");
    const clickedNumber = parseInt(this.textContent);
    console.log(clickedNumber);

}
