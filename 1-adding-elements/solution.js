const container = document.querySelector(".container");
const addButton = document.querySelector(".button-add");

addButton.addEventListener("click", () => {
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");

  container.append(boxElement);

  console.log(boxElement);
  form.reset();
});
