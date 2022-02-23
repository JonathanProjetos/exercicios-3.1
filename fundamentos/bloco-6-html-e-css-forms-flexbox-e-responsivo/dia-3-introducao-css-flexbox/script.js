/* 

                                    CSS-FLEXBOX-PARTE 01


 1-Primeira coisa a se fazer e definir um conteiner e aplicar o display flex sobre ele.

 nome da class meramente ilustrativa

 .flex-container{
     display: flex;
 }

 2- flex-direction row = movimenta no sentido centro fora horizontalmente "para esquerda ou direita".
 3- flex-direction row-reverse =  inverte a posição dos itens no sentido horizontal
 4- flex-direction column = movimenta no sentido centro fora verticalmente "para cima ou baixo"
 5- flex-direction column-reverse = inverte a posição dos itens no sentido vertical 


 Flex Lines

 São linhas imaginárias usadas para agrupamento e alinhamento de flex items dentro de seus respectivos containers. 
 Um Flex container pode ser single-line ou multi-line , dependendo da propriedade flex-wrap :
 Um Flex container single-line dispõe todos os seus filhos (flex items) em uma única linha;


 Um Flex container multi-line quebra seus flex items em múltiplas linhas. 
 Isso é similar ao que acontece quando um texto é quebrado em uma nova linha quando está muito grande ( overflow ).

CSS Flexbox Multi Line

 6- flex-wrap: rowrap Gera um comportamento de não quebrar a linha considerando o item interno caso o item seja maior
 que o conteiner ele passara para fora da área do conteiner.
 
 7- flex-wrap: wrap gera o comportamento de quebra de linha caso a soma do item utrapasse a capacidade de deslocamento 
 no sentido definido no flex-direction

 8- flex-wrap: wrap-reverse gera um comportamento de quebra de linha ao contrario de flex-wrap: wrap a linha quebra 
 para cima ao inves de quebrar para baixo.

 9- flex-flow: Faz a função do flex-direction e flex-wrap junto  em um so comando porem ele recebe os dois paramentros
 exemplo
 
 .flex-container{
     display: flex;
     flex-direction: row;
     flex-wrap: wrap   
 }

 .flex-container{
     display: flex;
     flex-flow: row wrap;   
 }


 10- align-item = alinha todos o item conforme o espaço disponivel dentro de pai e por padrão recebe o tipo "strach"(estica)

 11- align-content = 
 
 
 12-justify-content = Alinha todos os filhos do pai conforme a direção o alinhamento vai seguir a direção determinada pelo
 flex-direction.


O justify-content alinha os flex items no container de acordo com a direção. Essa propriedade possui os valores flex-start que alinha os itens ao início do container,
flex-end que alinha os itens ao final do container, center que alinha os itens ao centro do container, space-between cria um espaçamento igual entre os elementos,
mantendo o primeiro grudado no início e o último no final, e space-around também cria um espaçamento entre os elementos, mas os espaçamentos do meio são duas vezes
maiores que o inicial e final.
Já a propriedade align-items alinha os flex items de acordo com o eixo transversal (cross-axis). Os valores que essa propriedade aceita são stretch , que é seu valor
padrão e faz com os flex items cresçam igualmente, flex-start alinha os itens ao início, flex-end alinha os itens ao final, center alinha os itens ao centro e baseline que
alinha os itens de acordo com a linha base da tipografia.

Por fim, a propriedade align-content alinha as linhas do container em relação ao eixo transversal (cross-axis), sendo que essa propriedade só funciona caso haja mais de
uma linha de flex items. As opções de alinhamento que o align-content apresenta são stretch , seu valor padrão que faz com que os flex items cresçam igualmente na
vertical, flex-start , alinha todas as linhas de itens ao início, flex-end , que alinha todas as linhas de itens ao final, center que alinha todas as linhas ao centro, space-between 
que cria um espaçamento igual entre as linhas, mantendo a primeira grudada no topo e a última no bottom, e space-around , que também cria um espaçamento entre as linhas, mas os espaçamentos do meio são duas vezes maiores que o top e o bottom.




*/