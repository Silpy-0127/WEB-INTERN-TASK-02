// Selecting elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task Function
addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  // Create list item
  const li = document.createElement("li");

  // Add task text
  const span = document.createElement("span");
  span.textContent = taskText;
  li.appendChild(span);

  // Add remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");

  // Remove task when button clicked
  removeBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  // Toggle complete on task click
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  li.appendChild(removeBtn);

  // Add to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
