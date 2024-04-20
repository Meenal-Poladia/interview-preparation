const selectField = document.getElementById('selectField');
const selectText = document.getElementById('selectText');
const list = document.getElementById('list');
const arrowIcon = document.getElementById('arrowIcon');
const htmlCollectionOf = document.getElementsByClassName('options');

// delete item 9 from options

selectField.addEventListener('click' , () => {
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
})

for (const htmlCollectionOfElement of htmlCollectionOf) {
    htmlCollectionOfElement.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hide');
        arrowIcon.classList.toggle('rotate');
    }
}


