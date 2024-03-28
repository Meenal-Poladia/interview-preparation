const form = document.getElementById('new-task-form');
const input = document.getElementById('new-task-input');
const list_el = document.getElementById('tasks');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const task = input.value;

    if (!task) {
        alert('Please add a task');
        return;
    }

    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');
    // task_content_el.innerText = task;
    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el)

    list_el.appendChild(task_el);

    //Creating buttons
    const task_action_el = document.createElement('div');
    task_action_el.classList.add('actions');
    task_el.appendChild(task_action_el);

    const edit_button_el = document.createElement('button');
    edit_button_el.classList.add('edit');
    edit_button_el.innerText = 'Edit';
    const delete_button_el = document.createElement('button');
    delete_button_el.classList.add('delete');
    delete_button_el.innerText = 'Delete';

    task_action_el.appendChild(edit_button_el);
    task_action_el.appendChild(delete_button_el);

    input.value = ''

    edit_button_el.addEventListener('click', () => {
       if (edit_button_el.innerText.toLowerCase() === 'edit') {
           task_input_el.removeAttribute('readonly');
           task_input_el.focus();
           edit_button_el.innerText = 'Save';
       } else {
           task_input_el.setAttribute('readonly', 'readonly');
           edit_button_el.innerText = 'Edit';
       }
    })

    delete_button_el.addEventListener('click', () => {
        list_el.removeChild(task_el);
    })

})