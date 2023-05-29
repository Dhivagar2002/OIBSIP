// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const pendingTasksList = document.getElementById('pendingTasksList');
const completedTasksList = document.getElementById('completedTasksList');

// Add task to pending tasks list
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', completeTask);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);

        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        pendingTasksList.appendChild(listItem);

        taskInput.value = '';
    }
}

// Mark task as complete
function completeTask() {
    const listItem = this.parentNode;
    const taskText = listItem.textContent;

    listItem.remove();

    const completedListItem = document.createElement('li');
    completedListItem.textContent = taskText;
    completedTasksList.appendChild(completedListItem);
}

// Delete task
function deleteTask() {
    const listItem = this.parentNode;
    listItem.remove();
}

// Add event listener to add task button
addTaskButton.addEventListener('click', addTask);
