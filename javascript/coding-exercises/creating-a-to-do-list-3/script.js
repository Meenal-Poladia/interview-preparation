const input = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = () => {
    const value = input.value;

    if (value === '') {
        alert('Enter a valid task name');
        return;
    } else {
        const liEl = document.createElement('li');
        liEl.innerText = value;
        listContainer.appendChild(liEl);
        const spanEl = document.createElement('span');
        spanEl.innerHTML = '\u00d7';
        liEl.appendChild(spanEl);
    }

    input.value = '';
    saveData();
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
})

const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();