

//O que é JSON e por que o usamos?
// JSON significa J ava S cript O bject N otation e é basicamente uma forma de representarmos dados como objetos Javascript:

{
    "trybers": [
      {
        "name": "Lauro Cesar",
        "github": "lauroandrade",
        "status": "#vqv"
      }
    ]
  }

/* 
Fazendo uma requisição a uma API
Você pode fazer requisições a uma API de várias formas. Uma delas é no terminal.
No exemplo a seguir, vamos fazer um request para uma API , que retorna um JSON como response .
Copiar
wget 'https://pokeapi.co/api/v2/pokemon/ditto' -O - -q
 */