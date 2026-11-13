let currentIndex = 0;

const counterTop = document.getElementById("counterTop");
const counterBadge = document.getElementById("counterBadge");
const countryName = document.getElementById("countryName");
const cityName = document.getElementById("cityName");
const cityDesc = document.getElementById("cityDesc");
const continent = document.getElementById("continent");
const famousFood = document.getElementById("famousFood");
const famousPlace = document.getElementById("famousPlace");
const language = document.getElementById("language");
const cityImage = document.getElementById("cityImage");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const exploreMoreBtn = document.getElementById("exploreMoreBtn");
const dots = document.querySelectorAll(".dot");


function updateDestination(index) {
    const item = destinationsData[index];

    counterTop.textContent = item.number + " / 0" + destinationsData.length;
    counterBadge.textContent = item.number;
    countryName.textContent = item.country;
    cityName.textContent = item.city;
    cityDesc.textContent = item.description;
    continent.textContent = item.continent;
    famousFood.textContent = item.food;
    famousPlace.textContent = item.place;
    language.textContent = item.language;
    cityImage.src = item.image;
    cityImage.alt = item.city;


    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}


nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= destinationsData.length) {
        currentIndex = 0;
    }
    updateDestination(currentIndex);
});

prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = destinationsData.length - 1;
    }
    updateDestination(currentIndex);
});


dots.forEach(dot => {
    dot.addEventListener("click", () => {
        currentIndex = parseInt(dot.getAttribute("data-index"));
        updateDestination(currentIndex);
    });
});

exploreMoreBtn.addEventListener("click", () => {
    const currentItem = destinationsData[currentIndex];
    alert("Discover " + currentItem.city + " in " + currentItem.country + "!\nFamous Place: " + currentItem.place);
});