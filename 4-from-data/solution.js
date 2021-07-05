const elementsToRender = [
  {
    className: "box",
    backgroundColor: "lightgreen",
  },
  {
    className: "circle",
    backgroundColor: "lightseagreen",
  },
  {
    className: "box",
    backgroundColor: "lightgreen",
  },
  {
    className: "circle",
    backgroundColor: "lightseagreen",
  },
];

const container = document.querySelector(".container");
const addButton = document.querySelector(".button-add");

addButton.addEventListener("click", () => {
  elementsToRender.forEach((elementData) => {
    const element = document.createElement("div");
    element.classList.add(elementData.className);
    element.style.backgroundColor = elementData.backgroundColor;

    container.append(element);
  });
});
