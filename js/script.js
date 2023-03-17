const playBtn = document.querySelector("div button");
let box = document.querySelector(".box");
let squareDimension = document.getElementsByClassName("square");
let arrayDimension;
let arrayNumbers = [];

playBtn.addEventListener("click", function () {
    const difficulty = document.getElementById("difficulty").value;
    if (difficulty === "difficile") {
        arrayDimension = 100;

        arrayNumbers = gridDimension(arrayDimension);

        for(i=0; i < arrayNumbers.length; i++){
            let newsquare = gridCreation(arrayNumbers[i]);
            box.append(newsquare);
            squareDimension[i].classList.add("s-100");
            squareDimension[i].addEventListener("click", backgroundBlue);
       }
        
        
        
        
    } else if( difficulty === "medio"){
        arrayDimension = 81;
        arrayNumbers = gridDimension(arrayDimension);

        for(i=0; i < arrayNumbers.length; i++){
            let newsquare = gridCreation(arrayNumbers[i]);
            box.append(newsquare);
            squareDimension[i].classList.add("s-81");
            squareDimension[i].addEventListener("click", backgroundBlue);

       }

        
    } else{ 
        arrayDimension = 49;

        arrayNumbers = gridDimension(arrayDimension);

        for(i=0; i < arrayNumbers.length; i++){
            let newsquare = gridCreation(arrayNumbers[i]);
            box.append(newsquare);
            squareDimension[i].classList.add("s-49");
            squareDimension[i].addEventListener("click", backgroundBlue);

       }

        
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


function gridCreation(text) {
    let newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.innerHTML = `<span>${text}</span>`;  
    return newSquare;
}

function backgroundBlue() {
    this.classList.add("blue");

}
