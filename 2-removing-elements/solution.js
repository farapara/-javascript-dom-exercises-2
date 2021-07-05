const container = document.querySelector(".container");
const addButton = document.querySelector(".button-add");

addButton.addEventListener("click", () => {
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");

  boxElement.addEventListener("click", () => {
    if (confirm("Do you really want to remove this box?")) {
      boxElement.remove();
    }
  });

  container.append(boxElement);
});
