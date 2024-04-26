const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');

const access_key = 'a0gdxAKAvi7mfXSusGVZ1iImEXPHU4ctBwdPnEPhgSI';
const secret_key = '7GZGiVbK6BAAvdO6zWiVc5Ay6orS8PCvXdNzmRN6BEE';
const applicationId = '595143';

let keyword = '';
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=a0gdxAKAvi7mfXSusGVZ1iImEXPHU4ctBwdPnEPhgSI&per_page=12`

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResult.innerHTML = '';
    }

    results.map(result => {
        const image = document.createElement('img');
        image.src = result.urls.small;

        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMoreBtn.style.display = 'block';
}

showMoreBtn.addEventListener('click', () => {
    page++;
    searchImages();
})

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})