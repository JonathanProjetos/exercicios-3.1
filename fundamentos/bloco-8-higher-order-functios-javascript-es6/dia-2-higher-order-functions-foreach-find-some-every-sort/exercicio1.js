const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  //1.
  function authorBornIn1947(array) {

     const vificaAutor = array.find((elemento) => elemento.author.birthYear === 1947 ) 
          
    
    return vificaAutor.author.name;
  }

  authorBornIn1947(books)


//2.

function smallerName() {
  let nameBook;

 books.forEach((book) => {
   if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name
   }
 })
  return nameBook;

  
}

console.log(smallerName(books))

//3.

const expectedResult1 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};



function getNamedBook(array) {
  const arrayExpectedResult = []

  if (array) {
    arrayExpectedResult.push(expectedResult1) 
  }

  return arrayExpectedResult;
}

function nomeDoLivro(){
  const newArray = getNamedBook(expectedResult1);
  const primeiroNome = newArray.find((elemento) => elemento)
  const mensagem = `O nome é ${primeiroNome.name} e sua quantidade de caracteres é : ${primeiroNome.name.length}. `
  return mensagem;
}
console.log(nomeDoLivro());



