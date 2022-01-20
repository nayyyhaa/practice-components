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

// DRAWER COMPONENT
const drawerElements = document.querySelectorAll(".drawer-content li");

//functions
function deactivateElement() {
  drawerElements.forEach((element) => element.classList.remove("active"));
}

// Event Listener
drawerElements.forEach((element) => {
  element.addEventListener("click", () => {
    deactivateElement();
    element.classList.toggle("active");
  });
});
