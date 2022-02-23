/* 
                                ALIGN-SELF

utilizando o aling self e possivel dedicar uma alinhamento para uma classe ou id especifica para muda somente um elemento.
order =  e possivel alinhar o item dentro de uma classe conforme a posição de criação do item o alinhamento deve ter como referencia dentro de um pai.

                                        ORDER

exmeplo: .flex-conteiner > .box:nth-child(1)
            pai            classe        filho       

    .one {
        background-color: #FBD26A;
        display: flex;
        //Altere a propriedade order. 
        order: 1;
        list-style: none;
      }

      .two {
        background-color: #FAA488;
        display: flex;
        //Altere a propriedade order. 
        order: 2;
        list-style: none;
      }

      .three {
        background-color: #9069EF;
        display: flex; 
        //Altere a propriedade order. 
        order: 3;
        list-style: none;
      }

      .four {
        background-color: #006472;
        display: flex;
        //Altere a propriedade order.
        order: 4;
        list-style: none;
      }

                            FELX : GROW  FLEX: SHRINK   FLEX:BASIS


      exmeplo: .flex-conteiner > .box:nth-child(1)
            pai            classe        filho

Quando e aplicado como no exemplo acima cada item tera o seu espaço alterado entre o grow,shrink,basis somente no filho especifico.


         exmeplo: .flex-conteiner div{
                       pai       childs
         }

Quando e aplicado como no exemplo acima todos itens tera o seu espaço alterado entre o grow,shrink,basis em todos os seus filhos.

flex:grow = almenta a proporção do item e ocupa todo o espaço disponivel.
flex:shrink = encolhe o(os) itens filho do pai em proporção igual ou unitario se for definido.
flex:basis = determina o espaço.






*/