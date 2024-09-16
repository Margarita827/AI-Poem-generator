function generatePoem(event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");



new Typewriter("#poem", {
  strings: ["poem here"],
  autoStart: true,
  delay: 1,

});

}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);