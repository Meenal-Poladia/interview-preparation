const form = document.querySelector('.form');
const inputField = document.getElementById('input');
const submitButton = document.getElementById('button');
const list = document.getElementById('list');

submitButton.addEventListener('click', () => {
    const para = document.createElement('p');
    para.innerText = `${inputField.value} <p> X </p>`;
    list.appendChild(para);
    inputField.value = '';

    para.addEventListener('click', (e) => {
       para.style.textDecoration = 'line-through'
    });

    para.addEventListener('dblclick', (e) => {
        list.removeChild(para)
    });
})
