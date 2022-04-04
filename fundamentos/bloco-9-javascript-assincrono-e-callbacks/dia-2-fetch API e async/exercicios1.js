// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = (dados) => {
 
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      };
      
      const promessa = fetch(API_URL,myObject)
      .then(response => response.json()) 
      .then(dado => document.getElementById('jokeContainer').innerText = dado.joke)
    
      
      
};
console.log();
window.onload = () => fetchJoke();