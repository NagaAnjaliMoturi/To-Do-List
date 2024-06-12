function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", toggleTask);
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));
    taskList.appendChild(li);
    taskInput.value = "";
  }
  
  function toggleTask() {
    var li = this.parentElement;
    if (this.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  }
  
  function clearCompleted() {
    var taskList = document.getElementById("taskList");
    var completedTasks = taskList.querySelectorAll(".completed");
    completedTasks.forEach(function(task) {
      taskList.removeChild(task);
    });
  }
  