let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tabuleiro = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function desenharTabuleiro() {
  tabuleiro.forEach(row => {
    console.log(row.join(' | '));
  });
  console.log('\n');
}

function marcarPosicao(x, y, jogador) {
  if (tabuleiro[x][y] === '') {
    tabuleiro[x][y] = jogador;
    desenharTabuleiro();
  } else {
    console.log('Essa posição já foi marcada!');
  }
}

function verificarGanhador() {
  for (let i = 0; i < 3; i++) {
    if (tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2] && tabuleiro[i][0] !== '') {
      return tabuleiro[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i] && tabuleiro[0][i] !== '') {
      return tabuleiro[0][i];
    }
  }
  if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && tabuleiro[0][0] !== '') {
    return tabuleiro[0][0];
  }
  if (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] && tabuleiro[0][2] !== '') {
    return tabuleiro[0][2];
  }
  return null;
}

function reiniciarJogo() {
  tabuleiro = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  desenharTabuleiro();
}

function perguntarPosicao(jogador) {
  rl.question(`Jogador ${jogador}, digite a posição (formato 'linha coluna', exemplo: '00') ou digite 'sair' para encerrar o jogo: `, posicao => {
    if (posicao.toLowerCase() === 'sair') {
      console.log('Jogo encerrado.');
      rl.close();
      return;
    }

    let [linha, coluna] = posicao.split('');
    let x = parseInt(linha, 10);
    let y = parseInt(coluna, 10);

    if (x >= 0 && x < 3 && y >= 0 && y < 3) {
      marcarPosicao(x, y, jogador);
      let ganhador = verificarGanhador();
      if (ganhador) {
        console.log(`Jogador ${ganhador} ganhou!`);
        rl.close();
      } else {
        let proximoJogador = jogador === 'X' ? 'O' : 'X';
        perguntarPosicao(proximoJogador);
      }
    } else {
      console.log('Posição inválida!');
      perguntarPosicao(jogador);
    }
  });
}

desenharTabuleiro();
perguntarPosicao('X');
