addEventListener('submit', (event) => {
    event.preventDefault()
    const inputVale = event.target.food.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVale}`
    fetch(url)
        .then(res => res.json())
        .then(data => getFood(data.meals))
});


const getFood = foods => {
    console.log(foods)
    const parent = document.getElementById('parent')
    parent.innerHTML = ``

    foods.map(food => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML =
            `
        <div onclick="loadMealDetail(${food.idMeal})" class="card">
        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${food.strMeal}</h5>
        <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
        </div>
    </div>
        `
        parent.appendChild(div)
    });

}
