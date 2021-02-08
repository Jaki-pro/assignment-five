const main = () => {
    const getInput = document.getElementById("input-area").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${getInput}`)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))
        .catch(err => alert(err))
}
const displayFoods = foods => {
    const foodsDiv = document.getElementById("foods-div");
    foodsDiv.innerHTML = "";

    foods.forEach(food => {
        console.log(food.strMeal);

        const foodDiv = document.createElement("div");
        foodDiv.classList.add("food-div");
        foodDiv.innerHTML = `
            <div onclick = "showDetails('${food.strMeal}')">
            <img src ='${food.strMealThumb}'>
            <h5 class="mb-4 mt-2">${food.strMeal}</h5>
            </div>
        `;
        foodsDiv.appendChild(foodDiv);
    });

}
const showDetails = details => {
    console.log(details);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`;
    fetch(url)
        .then(response => response.json())
        .then(data => ingredientPart(data.meals[0]))
}

const ingredientPart = recipe => {

    const detailsArea = document.getElementById("details-area");
    detailsArea.innerHTML = "";
    const subDetailsArea = document.createElement("div");
    subDetailsArea.classList.add("sub-details-area");

    subDetailsArea.innerHTML = `
        <img src = '${recipe.strMealThumb}'>
        <br>
        <hr class="text-danger">
        <h2 class="text-center text-primary">${recipe.strMeal}</h2>
        <p class="text-center">ID Meal: ${recipe.idMeal}</p>
        <h5>${recipe.strIngredient1}<h5>
        <h5>${recipe.strIngredient2}<h5>
        <h5>${recipe.strIngredient3}<h5>
        <h5>${recipe.strIngredient4}<h5>
        <h5>${recipe.strIngredient5}<h5>
        <h5>${recipe.strIngredient6}<h5>
        <h5>${recipe.strIngredient7}<h5>
        <h5>${recipe.strIngredient8}<h5>
        <h5>${recipe.strIngredient9}<h5>
        <h5>${recipe.strIngredient10}<h5>
        
    `;

    detailsArea.appendChild(subDetailsArea);

}