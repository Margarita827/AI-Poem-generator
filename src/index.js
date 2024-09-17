function displayPoem(response) {
    new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}


function generatePoem(event) {
    event.preventDefault();

let instrucionsInput = document.querySelector("#user-instructions");
let apiKey = "o84c2a432ct7ef09733306be2507e42f";
let prompt = `User instructions: Generate a Spanish poem about ${instrucionsInput.value}`;
let context = "You are a romantic poem expert and love to write short poems. Your mission is to generate a four line poem in basic HTML. Make sure to follow the user instructions";

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayPoem);
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);


