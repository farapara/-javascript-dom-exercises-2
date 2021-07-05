const container = document.querySelector(".container");
const addButton = document.querySelector(".button-add");

addButton.addEventListener("click", () => {
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");

  const inputElement = document.createElement("input");

  inputElement.setAttribute("type", "color");

  boxElement.append(inputElement);
  container.append(boxElement);

  inputElement.addEventListener("input", () => {
    boxElement.style.backgroundColor = inputElement.value;
  });
});
