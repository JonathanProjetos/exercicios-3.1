

const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  const filterPeople = (Objeto) => {
   
    const arrayPerfil = Objeto.filter((elemento) => {
        const {bornIn, nationality} = elemento
       if(nationality === "Australian" && bornIn <= 2000 && bornIn >= 1901){
           return elemento;
       }  
    }) 

    return arrayPerfil
  }
  console.log(filterPeople(people));