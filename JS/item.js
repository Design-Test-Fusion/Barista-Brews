"use strict"

// // read the json Array From LS 
let jsonArray = window.localStorage.getItem("user choice");


// // convert the JSON to JS 
let objDummyArray = JSON.parse(jsonArray);


//Render Data
function render(e) {

    //Creating elements
    let drinkName = document.getElementById("cardTitle");
    drinkName.textContent = objDummyArray["name"];

    let drinkImage = document.getElementById("img");
    drinkImage.setAttribute("src", objDummyArray.image);

    let drinkIngredients = document.getElementById("renderIngredients");
    let drinkIngredientsArray = objDummyArray.ingeredients.split(",");
    for (let i = 0; i < drinkIngredientsArray.length; i++) {
        let ingredientsElements = document.createElement('li');
        drinkIngredients.appendChild(ingredientsElements);
        ingredientsElements.textContent = drinkIngredientsArray[i];
    }



    let drinkSteps = document.getElementById("renderSteps");
    let drinkStepsArray = objDummyArray.steps.split(",");
    for (let i = 0; i < drinkStepsArray.length; i++) {
        let stepsElements = document.createElement('li');
        drinkSteps.appendChild(stepsElements);
        stepsElements.textContent = drinkStepsArray[i];
    }

    //let stepsElements = document.createElement('li');
    //Assigning values to the elements
    drinkName.textContent = objDummyArray.name;
    drinkImage.textContent = objDummyArray.image;


    // //     //Appending elements
    // //     drinkIngredients.appendChild(drinkIngredientsList);
    // //     drinkSteps.appendChild(drinkStepsList);


    //Styling
    drinkIngredients.style.position = "absolute";
    drinkIngredients.style.left = "57px"
    drinkIngredients.style.top = "160px"
    drinkIngredients.style.display = "block";
    drinkIngredients.style.width = "154px";
    drinkIngredients.style.textAlign = "left";
    drinkIngredients.style.fontWeight = "500";
    drinkIngredients.style.fontSize = "18px";

    drinkSteps.style.position = "absolute";
    drinkSteps.style.left = "57px"
    drinkSteps.style.top = "160px"
    drinkSteps.style.display = "block";
    drinkSteps.style.width = "154px";
    drinkSteps.style.textAlign = "left";
    drinkSteps.style.fontWeight = "500";
    drinkSteps.style.fontSize = "18px";
}
render();