# 📘 desafio da semana 02
Desafio semanal
Semana 2

Descrição:  Vamos elaborar uma lógica para um campeonato de filmes, o objetivo é simular uma competição entre filmes que estão na lista, usando notas atribuídas a cada filme para determinar etapas de eliminação de cada fase. 

Você vai reforçar:
Trabalhar com objetos literais para representar dados complexos.
Manipular arrays para organizar os filmes e avançar fases do campeonato.
Aplicar condicionais (if/else) para comparar notas e decidir vencedores.
Utilizar métodos de arrays, como sort e find, para desempates e filtragem.

Você possui uma lista de filmes favoritos, cada um com um título e uma nota atribuída. O campeonato será realizado em 3 fases:
Primeira partida:
Os filmes do início da lista competem com os filmes do final.
Para cada confronto, o filme com a nota mais alta avança para a próxima fase.
Em caso de empate, o vencedor será definido pela ordem alfabética do título.


Segunda partida (semifinal):
Os vencedores da primeira fase competem entre si, em duplas consecutivas da lista.
A mesma regra de comparação de notas e desempate por ordem alfabética se aplica.


Última partida (final):
Os dois finalistas disputam o campeonato.
O resultado final mostra o campeão e o vice-campeão.
Regras do campeonato
Sempre compare as notas dos filmes para decidir o vencedor da partida.
Em caso de empate, utilize a ordem alfabética do título para desempatar.
O resultado final deve mostrar:
🏆 Campeão: título e nota
🥈 Vice-campeão: título e nota
Estrutura de dados
O conjunto de filmes será armazenado em um array:
let filmes = [
  { titulo: "Nome do filme", nota: 9 },
  { titulo: "Nome do filme", nota: 8 },
  { titulo: "Nome do filme", nota: 9 },
  { titulo: "Nome do filme", nota: 8 }
];
Exemplo de saída esperada
🏆 Campeão: Matrix Nota: 9
🥈 Vice: Interestelar Nota: 9
Observação: se houver empate em notas, o critério de desempate será a ordem alfabética do título do filme.

## 📖 descrição
> Coloque aqui uma explicação sobre o conteúdo da apostila e como as alunas devem utilizá-la.

---

## 📂 materiais disponíveis
- [Apostila em PDF](./apostila.pdf)  
- [Slides de apoio](./slides.pdf)  

---

## 🔗 Links de Apoio
- [Artigo 1](https://)  
- [Artigo 2](https://)  
