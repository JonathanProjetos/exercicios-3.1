/* function userInfo() {
    let userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);
  }
  userInfo();
  console.log(userEmail);
 */
/*   if (true) {
    // inicio do escopo do if
    const userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20 */
  
/*   const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro */
/* 
let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition */


const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo.name = 'João';
  
  console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }


  const technologies = ['Javascript', 'CSS', 'HTML'];
  technologies.push('React');
  console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]
  
  /* technologies = ['Javascript', 'CSS', 'HTML', 'React']
  console.log(technologies);  */// Erro  


 /*  const myName = 'Isabella';
console.log('Hello' + ' ' + myName + '!'); */


const myName = 'Isabella';
console.log(`Welcome ${myName}!`);

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

//utilizando o \n gera uma quebra de linha.


// O LET NÃO VAZA ESCOPO

// `` utiliza crase para template literals ${variavel}
const nome = 'Trybe';
const lema = 'VQV';


console.log(`${nome}, melhor escola de tecnologia! ${lema}!`);
