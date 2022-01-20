// Chip Scripts

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
