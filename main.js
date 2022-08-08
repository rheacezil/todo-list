window.addEventListener('load', () => {
    //e.preventDefault(); //prevents hidden functionalities of certain elements

    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const tasksContainer = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log('started.');

        const newTask = input.value;

        //HTML Setup
        const newTaskContainer = document.createElement('div');
        newTaskContainer.classList.add('task');

        const newTaskContent = document.createElement('div');
        newTaskContent.classList.add('content');

        newTaskContainer.appendChild(newTaskContent);

        const newInput = document.createElement('input');
        newInput.classList.add('text');
        newInput.type = 'text';
        newInput.setAttribute('readonly', 'readonly');
        newInput.value = newTask;

        newTaskContent.appendChild(newInput);

        const taskActions = document.createElement('div');
        taskActions.classList.add('actions');

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerText = "Edit"

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerText = "Delete"

        taskActions.appendChild(editButton);
        taskActions.appendChild(deleteButton);

        newTaskContainer.appendChild(taskActions);

        //Final
        tasksContainer.appendChild(newTaskContainer);


        //Javascript Setup
        input.value = '';

        editButton.addEventListener('click', (e) => {
            console.log('edit ni');

            if(editButton.innerText.toLowerCase() == 'edit') {
                editButton.innerText = "SAVE";
                newInput.removeAttribute('readonly');
                newInput.focus();
            } else {
                editButton.innerText = 'Edit';
                newInput.setAttribute('readonly', 'readonly');
            }
        })

        deleteButton.addEventListener('click', (e) => {
            tasksContainer.removeChild(newTaskContainer)
        })
    })
});;