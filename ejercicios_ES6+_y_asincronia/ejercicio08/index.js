const selectCharacter = document.querySelector("#character-list");
const imageCharacter = document.querySelector(".character-image");

fetch("https://thronesapi.com/api/v2/Characters")
  .then((response) => response.json())
  .then((characters) => {
    characters.forEach((character) => {
      const option = document.createElement("option");
      option.value = character.imageUrl;
      option.textContent = character.fullName;

      selectCharacter.appendChild(option);
    });

    imageCharacter.src = characters[0].imageUrl;

    selectCharacter.addEventListener("change", (event) => {
      imageCharacter.src = event.target.value;
    });
  });
