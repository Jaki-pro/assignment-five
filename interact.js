


document.getElementById("food-btn").addEventListener("click",function(){
    

    document.getElementById("foods").innerHTML = "";
    const inputFood = document.getElementById("input-food").value;
    
    


fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputFood}`)
    .then(res => res.json())
    .then(data => displayFoods(data))
    .catch(err => alert(err))

const displayFoods = foods => {
    console.log(foods);
    const mainFoods = foods.meals;

    for (let i = 0; i < mainFoods.length; i++) {
        const food = mainFoods[i].strCategory;
        const foodThumb = mainFoods[i].strMealThumb;
        

        const foodsDiv = document.getElementById("foods");
        const foodDiv = document.createElement("div");
        
        foodDiv.classList.add("food")
        foodDiv.innerHTML = `
        <img src="${foodThumb}"/>
            <h4>${food}</h4>
            <button onclick = "showDetails('${food}')">details</button>

        `;
        foodsDiv.appendChild(foodDiv);
    }
 
    
}

})

function showDetails(food){
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`
    fetch(url)
    .then(res => res.json())
    .then(data => showFood(data.meals[0]))
}
function showFood(recipe){
    
    const detailsId = document.getElementById("details");
    detailsId.innerHTML = "";
    const subDetailsId = document.createElement("div");
    subDetailsId.innerHTML = `
        <img src='${recipe.strMealThumb}'
        <h4>${recipe.strMeal}</h4>
        <p>${recipe.idMeal}</p>

    `;
    detailsId.appendChild(subDetailsId);
}













// fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
// .then(res =>res.json())
// .then(all => displayFoods(all.categories))

// const displayFoods = foods => {
//     for (let i = 0; i < foods.length; i++) {
//         const food = foods[i];
//         console.log(food.strCategory);

//         const foodsDiv = document.getElementById("foods");
        // const foodDiv = document.createElement("div");
        // foodDiv.classList.add("food")
        // foodDiv.innerHTML = `
        //     <img src="${food.strCategoryThumb}"/>
        //     <h4>${food.strCategory}</h4>

        // `;
//         foodsDiv.appendChild(foodDiv);
//     }

// }