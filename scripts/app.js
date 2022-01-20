// CHIP COMPONENT
const chipInput = document.querySelector("#chip-input");
const chipWrapper = document.querySelector(".input-chip-wrapper");

//functions
function addNewChip(text) {
  const chipDiv = document.createElement("div");
  chipDiv.classList.add("chip");
  const newText = document.createElement("span");
  newText.classList.add("chip-text");
  newText.innerText = text;
  const chipDismiss = document.createElement("i");
  chipDismiss.innerHTML = `<i class="fas fa-times-circle"></i>`;
  chipDismiss.addEventListener("click", () => chipDiv.remove());
  newText.appendChild(chipDismiss);
  chipDiv.appendChild(newText);
  chipWrapper.appendChild(chipDiv);
}

// Event Listeners
chipInput.addEventListener("keyup", (e) => {
  //enter event
  if (e.keyCode === 13) {
    addNewChip(e.target.value);
    e.target.value = null;
  }
});

addNewChip("chip 1");

// DRAWER COMPONENT & HEADER COMPONENT
const drawerElements = document.querySelectorAll(".drawer-content li");
const headerElements = document.querySelectorAll(".header-menu li");

//functions
function deactivateElement(hoverableElements) {
  hoverableElements.forEach((element) => element.classList.remove("active"));
}

function toggleElement(hoverElement, hoverableElements) {
  hoverElement.addEventListener("click", () => {
    deactivateElement(hoverableElements);
    hoverElement.classList.toggle("active");
  });
}

// Event Listener
drawerElements.forEach((element) => {
  toggleElement(element, drawerElements);
});

headerElements.forEach((element) => {
  toggleElement(element, headerElements);
});
