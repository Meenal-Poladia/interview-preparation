const bitcoinPrice = document.getElementById('bitcoinPrice');
const ethereumPrice = document.getElementById('ethereumPrice');
const dogecoinPrice = document.getElementById('dogecoinPrice');

const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd`;

fetch(url)
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        bitcoinPrice.innerText = data.bitcoin.usd;
        ethereumPrice.innerText = data.ethereum.usd;
        dogecoinPrice.innerText = data.dogecoin.usd;
    });