const form = document.getElementById("userForm");
const usernameInput = document.getElementById("username");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const hobbyInput = document.getElementById("hobby");
const result = document.getElementById("formResult");
const clearBtn = document.getElementById("clear");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateInput();
});

clearBtn.addEventListener("click", (event) => {
    event.preventDefault();
    clearCard();
    clearForm();
});

function validateInput() {
    const name = usernameInput.value.trim();
    if (name == "") {
        clearCard();
        result.textContent = "Ошибка: Имя не может быть пустым!";
        result.style.color = "red";
        usernameInput.focus();
        return;
    }
    const age = Number(ageInput.value);
    if (isNaN(age) || age <= 0 || age > 120) {
        clearCard();
        result.textContent = "Ошибка: Введите корректный возраст (от 1 до 120)!";
        result.style.color = "red";
        ageInput.focus();
        ageInput.value = "";
        return;
    }
    const city = cityInput.value.trim();
    if (city == "") {
        clearCard();
        result.textContent = "Ошибка: Город не может быть пустым!";
        result.style.color = "red";
        cityInput.focus();
        return;
    }
    const hobby = hobbyInput.value.trim();
    if (hobby == "") {
        clearCard();
        result.textContent = "Ошибка: Хобби не может быть пустым!";
        result.style.color = "red";
        hobbyInput.focus();
        return;
    }
    createProfile(name, age, city, hobby);
}

function createProfile(name, age, city, hobby) {
    clearCard();
    
    const card = document.createElement("div");
    card.id = "profileCard";
    card.style.background = "white";
    card.style.borderRadius = "10px";
    card.style.padding = "20px";
    card.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    card.style.width = "100%";
    card.style.maxWidth = "400px";
    card.style.margin = "20px auto";
    
    const nameDiv = document.createElement("div");
    nameDiv.style.margin = "10px 0";
    nameDiv.style.padding = "10px";
    nameDiv.style.background = "#f7f7f7";
    nameDiv.style.borderRadius = "5px";
    nameDiv.textContent = `👤 Имя: ${name}`;
    
    const ageDiv = document.createElement("div");
    ageDiv.style.margin = "10px 0";
    ageDiv.style.padding = "10px";
    ageDiv.style.background = "#f7f7f7";
    ageDiv.style.borderRadius = "5px";
    ageDiv.textContent = `🎂 Возраст: ${age}`;
    
    const cityDiv = document.createElement("div");
    cityDiv.style.margin = "10px 0";
    cityDiv.style.padding = "10px";
    cityDiv.style.background = "#f7f7f7";
    cityDiv.style.borderRadius = "5px";
    cityDiv.textContent = `📍 Город: ${city}`;
    
    const hobbyDiv = document.createElement("div");
    hobbyDiv.style.margin = "10px 0";
    hobbyDiv.style.padding = "10px";
    hobbyDiv.style.background = "#f7f7f7";
    hobbyDiv.style.borderRadius = "5px";
    hobbyDiv.textContent = `🎨 Хобби: ${hobby}`;
    
    card.appendChild(nameDiv);
    card.appendChild(ageDiv);
    card.appendChild(cityDiv);
    card.appendChild(hobbyDiv);
    
    form.insertAdjacentElement("afterend", card);
}

function clearCard() {
    const oldCard = document.getElementById("profileCard");
    if (oldCard) oldCard.remove();
}

function clearForm() {
    usernameInput.value = "";
    ageInput.value = "";
    cityInput.value = "";
    hobbyInput.value = "";
    result.textContent = "";
}