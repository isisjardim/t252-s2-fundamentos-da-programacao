
type Filme = {
  titulo: string;
  nota: number;
};

let filmes: Filme[] = [
  { titulo: "Harry Potter e a Pedra Filosofal", nota: 10 },
  { titulo: "Meninas Malvadas", nota: 7 },
  { titulo: "Um Lugar Chamado Nothing Hill", nota: 8 },
  { titulo: "O Senhor dos Anéis", nota: 10 },
  { titulo: "Os Vingadores ", nota: 9 },
];


function compararNota(filmeA: Filme, filmeB: Filme): Filme {
  if (filmeA.nota > filmeB.nota) {
    return filmeA;
  } else if (filmeB.nota > filmeA.nota) {
    return filmeB;
  } else {
    return filmeA.titulo.localeCompare(filmeB.titulo) < 0 ? filmeA : filmeB;
  }
}
function primeiraPartida(filmes: Filme[]): Filme[] {
  let vencedores: Filme[] = []
  for (let i = 0; i < filmes.length / 2; i++) {
    let primeiroFilme = filmes[i];
    let ultimoFilme = filmes[filmes.length - i - 1];
    let vencedor = compararNota (primeiroFilme, ultimoFilme);
     vencedores.push(vencedor);
  }
  console.log(vencedores);
  return vencedores;
}

function segundaPartida(filmes: Filme[]): Filme[] {
  let vencedores: Filme[] = []
  for (let i = 0; i < filmes.length / 2; i = i + 2) {
    let primeiroFilme = filmes[i];
    let segundoFilme = filmes[filmes.length - i - 1];
    if (primeiroFilme !== undefined && segundoFilme !== undefined) {
      let comparadorFilmes = compararNota(primeiroFilme, segundoFilme);
      vencedores.push(comparadorFilmes);
    }
  }
  return vencedores;
}
function iniciarPartida(filmes: Filme[]): Filme[] {
  let Final: Filme[] = []
  let primeiraRodada = primeiraPartida(filmes);
  let segundaRodada = segundaPartida(primeiraRodada);
  Final = segundaRodada;
  return Final;
}

