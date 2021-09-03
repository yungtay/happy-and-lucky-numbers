# Happy and Lucky Numbers

Esta é uma aplicação onde o usuário poderá determinar se o número escolhido é Feliz e Sortudo, baseado nas sentenças abaixo:

Um número é considerado Feliz, se em algum ponto a soma de seus dígitos ao quadrado equivale a 1.

Um número é considerado Sortudo, se ele está presente no seleto grupo de números sortudos que podem ser definidos pelos seguinte passos:

  > 1. Uma lista de números com índice inicial i = 1, valor inicial i = 1 e que tende ao infinito i = ∞ ... [1,2,3,4,5,6,7,9,...,9999, ...].

  > 2. Deve-se iterar a partir do indice 2, retirando todos os números que estiverem nos índices que sejam multiplos do número presente neste índice ... No caso, o número 2, retira todos os números nos índices pares [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, ...] ... Após retirar os números, uma nova iteração deve acontecer.

  > 3. Caso a iteração anterior tenha retirado o próprio número que foi utilizado na rodada, na próxima, deve ser utilizado o mesmo índice para a escolha do número ... Neste caso, o número 3 será escolhido, resultando na retirada de todos os números com índices multiplos de 3 ... [1, 3, 7, 9, 13, 15, 19, 21, 25, ...]

  > 4. Caso a iteração anterior NÃO tenha retirado o próprio número que foi utilizado na rodada, na próxima, deve ser utilizado o próximo índice para a escolha do número ... Neste caso, o número 7 será escolhido, resultando na retirada de todos os números com índices multiplos de 7 ... [1, 3, 7, 9, 13, 15, 21, 25, ...]

  > 5. A iteração deve continuar até assegurar que o número de interesse faz parte do grupo seleto de Sortudos.

## Tecnologias

- [Jest](https://github.com/facebook/jest)
- [Readline Sync](https://github.com/anseki/readline-sync)

## Como rodar

1. Clonar este repositório

2. Instalar dependências
>`npm i`

3. Rodar os testes bases para verificar
>`npm run test`

4. Rodar a aplicação
>`npm start`
