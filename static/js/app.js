let inputTask = document.getElementById('task');
const taskLists = document.getElementById('tasks');

addTask = text => {
  let newTask = document.createElement('li')
  newTask.innerHTML = text
  taskLists.appendChild(newTask)
}

document.querySelector('.add-task').addEventListener('click', event => {
  //handle click
  addTask(inputTask.value);
})