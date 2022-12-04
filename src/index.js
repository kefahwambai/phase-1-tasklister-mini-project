document.addEventListener("DOMContentLoaded",  () => {
  // your code here
  const newForm = document.getElementById('create-task-form');
  
  newForm.addEventListener('submit', event => {
    event.preventDefault();
    const newTask = document.getElementById("new-task-description");
    const taskList = document.getElementById("tasks");
    const newTaskItem = document.createElement("li");
    newTaskItem.innerText = newTask.value;
    taskList.appendChild(newTaskItem);
   
    event.target.reset();
  });
});
  
  
 