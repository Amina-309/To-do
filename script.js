function addNewTask() {
  const inputField = document.getElementById("taskInput");
  const listContainer = document.getElementById("taskList");

  const taskText = inputField.value.trim();
  if (!taskText) {
    alert("Enter a task! ");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = taskText;
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => listContainer.removeChild(listItem));

  listItem.appendChild(removeButton);

  listContainer.appendChild(listItem);
  inputField.value = "";
}