describe( 'Arquivo de test do curse.', () =>{

    test('Não deveria passar!', (done) => {
        setTimeout(() => {
          expect(10).toBe(5);
          console.log('Deveria falhar!');
          done();
        }, 500);
      });





});

     
    