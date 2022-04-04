//const fetch = require('node-fetch');


// api.js
const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';
  
    const coins = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString());
        console.log(coins);
    return coins;
  }
  
const setCoins = async () =>{
    const coins = await fetchCoins();
    const listaLi = document.getElementById('coins-list');
    //const usdPrice = Number(price)
     coins.filter((moedas) => moedas.rank <= 10)
    .forEach((dado) => {
        const usdPrice = Number(dado.priceUsd)
        const criarli = document.createElement('li')
        criarli.innerText = `${dado.name} (${dado.symbol}): ${usdPrice.toFixed(2)}`
        listaLi.appendChild(criarli)
    });
    


}
  
  window.onload = () => setCoins();