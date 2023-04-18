const newTaskInput = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

function addTask(task) {
  tasks.push(task);

  updateTaskList();
}

function deleteTask(index) {
  tasks.splice(index, 1);

  updateTaskList();
}

function completeTask(index) {
  tasks[index].completed = true;

  updateTaskList();
}

function updateTaskList() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add('completed');
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '&times;';
    deleteBtn.addEventListener('click', () => {
      deleteTask(index);
    });

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
      completeTask(index);
    });

    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);
    taskList.appendChild(li);
  });
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault(); 
  const taskText = newTaskInput.value.trim(); 
  if (!taskText) {
    return; 
  }

  const task = { text: taskText, completed: false };
  addTask(task);

  newTaskInput.value = ''; 
});

updateTaskList();
