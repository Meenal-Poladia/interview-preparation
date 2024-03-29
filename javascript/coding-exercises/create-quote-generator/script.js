const quote = document.getElementById('quote');
const author = document.getElementById('author');

const apiUrl = `https://api.quotable.io/quotes/random?tags=technology,famous-quotes`;

const getQuote = async () => {
   const response =  await fetch(apiUrl);
   const data = await response.json();

   quote.innerText = data[0].content;
   author.innerText = data[0].author;
}

const twitterPage = () => {
  const url = `https://twitter.com/intent/tweet?text=` + quote.innerHTML + '----by ' + author.innerHTML;
   window.open(url, 'Tweet window', 'width=600, height= 300');
}

getQuote();