
let taskContainer = document.getElementById('taskContainer');
let taskCom = document.getElementById('taskCom');
let addTasks = document.getElementById('addTask');
let tasknum = 0;
function addTask() {
    if(addTasks.value.trim() !== ''){
        let checkbox  = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'task' + tasknum;
    let label = document.createElement('label');
    label.htmlFor = 'task' + tasknum;
    label.textContent = addTasks.value;
    let icon = document.createElement('i');
    icon.className = 'fas fa-trash-alt';
    icon.style.cursor = 'pointer';

  let task = document.createElement('li');
  task.appendChild(checkbox);
  task.appendChild(label);
  task.appendChild(icon);
  taskContainer.appendChild(task);
  addTasks.value = '';
  tasknum++;

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
      taskCom.appendChild(task);
  }
});

icon.addEventListener("click", function () {
  taskContainer.removeChild(task);
});
icon.addEventListener("click", function () {
  taskCom.removeChild(task);
})
}

}

// foreach(tasks, )




addTasks.addEventListener('keydown', function(e){
  if(e.key === 'Enter'){
    addTask();
  }
});