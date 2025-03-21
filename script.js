function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
      alert("Enter a task!");
      return;
  }

  let li = document.createElement("li");
  li.textContent = taskInput.value;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.onclick = function () {
      taskList.removeChild(li);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  
  taskInput.value = ""; // Clear input
}
