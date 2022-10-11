async function main() {
  const axios = require("axios");

  // make function async to request token
  async function getToken() {
    // Request to get access token for exercise auth
    var request = {
      method: 'POST',
      url: 'https://tecweb-js.insper-comp.com.br/token',
      data: {
        username: 'enriccog'
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };
    const response = await axios(request);
    return response.data.accessToken;
  }

  // make function async to request exercises
  async function getExercises(token) {
    // Request to get the exercises
    var request2 = {
      method: 'GET',
      url: 'https://tecweb-js.insper-comp.com.br/exercicio',
      data: {
        username: 'enriccog',
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    };
    try {
      const response = await axios(request2);
      return response.data;
    } catch (error) {
      // console.error(error);
    }
  }

  // Send the solution for an exercise
  async function getResponse(token, SLUG, resposta) {
    var request3 = {
      method: 'POST',
      url: `https://tecweb-js.insper-comp.com.br/exercicio/${SLUG}`,
      data: {
        username: 'enriccog',
        'resposta': resposta
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    };
    try {
      const response = await axios(request3);
      return response.data.sucesso;
    } catch (error) {
      // console.error(error);
    }
  }

  var token = await getToken();
  var exercises = await getExercises(token);
  var exercisesNames = Object.keys(exercises);
  
  // Solve exercise 'Soma valores'
  var SLUG = exercisesNames[0];
  var exercise = exercises[SLUG];
  var answer = exercise.entrada.a + exercise.entrada.b;
  var isCorrect = await getResponse(token, SLUG, answer);
  console.log(`O exercício ${exercise.titulo} está correto: ${isCorrect}`);
  
  // Solve exercise 'Tamanho da string'
  var SLUG = exercisesNames[1];
  var exercise = exercises[SLUG];
  var answer = exercise.entrada.string.length;
  var isCorrect = await getResponse(token, SLUG, answer);
  console.log(`O exercício ${exercise.titulo} está correto: ${isCorrect}`);
  
  // Solve exercise 'Nome do usuário'
  var SLUG = exercisesNames[2];
  var exercise = exercises[SLUG];
  var answer = '';
  for (var i = 0; i < exercise.entrada.email.length; i++) {
    var char = exercise.entrada.email.charAt(i);
    if (char == '@') {
      break;
    }
    answer = answer + char;
  }
  var isCorrect = await getResponse(token, SLUG, answer);
  console.log(`O exercício ${exercise.titulo} está correto: ${isCorrect}`);
  
  // Solve exercise 'Jaca Wars!'
  var SLUG = exercisesNames[3];
  var exercise = exercises[SLUG];
  var distance_reached = (exercise.entrada.v**2)*Math.sin(2*(exercise.entrada.theta*(Math.PI/180)))/9.8;
  if (distance_reached <= 102 && distance_reached >= 98) {
    var answer = 0;
  }
  if (distance_reached > 102) {
    var answer = 1;
  }
  if (distance_reached < 98) {
    var answer = -1;
  }
  var isCorrect = await getResponse(token, SLUG, answer);
  console.log(`O exercício ${exercise.titulo} está correto: ${isCorrect}`);
  
  // Solve exercise 'Ano bissexto'
  var SLUG = exercisesNames[4];
  var exercise = exercises[SLUG];
  var answer = false;
  if ((0 == exercise.entrada.ano % 4) && (0 != exercise.entrada.ano % 100) || (0 == exercise.entrada.ano % 400)) {
    answer = true;
  }
  var isCorrect = await getResponse(token, SLUG, answer);
  console.log(`O exercício ${exercise.titulo} está correto: ${isCorrect}`);
  
  // Solve exercise 'Volume da PIZZA!'
  var SLUG = exercisesNames[5];
  var exercise = exercises[SLUG];
  var answer = Math.round(Math.pow(exercise.entrada.z,2)*Math.PI*exercise.entrada.a);
  var isCorrect = await getResponse(token, SLUG, answer);
  console.log(`O exercício ${exercise.titulo} está correto: ${isCorrect}`);
  
  // Solve exercise 'Movimento retilíneo uniforme'
  var SLUG = exercisesNames[6];
  var exercise = exercises[SLUG];
  var answer = exercise.entrada.s0+(exercise.entrada.v*exercise.entrada.t);
  var isCorrect = await getResponse(token, SLUG, answer);
  console.log(`O exercício ${exercise.titulo} está correto: ${isCorrect}`);
  
  // Solve exercise 'Inverta a string'
  var SLUG = exercisesNames[7];
  var exercise = exercises[SLUG];
  var answer = exercise.entrada.string.split('').reverse().join('');
  var isCorrect = await getResponse(token, SLUG, answer);
  console.log(`O exercício ${exercise.titulo} está correto: ${isCorrect}`);
  
  // Solve exercise 'Soma os valores guardados no objeto'
  var SLUG = exercisesNames[8];
  var exercise = exercises[SLUG];
  var answer = exercise.entrada.objeto.reduce((a, b) => a+b);
  var isCorrect = getResponse(token, SLUG, answer);
  console.log(`O exercício ${exercise.titulo} está correto: ${isCorrect}`);

}
main();

// // ????????????????????????????????????????????????????????????????????????????????????????????????????????????????


// // Solve exercise 'Inverta a string'
// var SLUG = exercisesNames[7];
// var exercise = exercises[SLUG];
// var answer = exercise.string.split('').reverse().join('');
// var isCorrect = getResponse(token, SLUG, answer);
// console.log(`O exercício ${exercise.titulo} está correto: ${isCorrect}`);


// // Solve exercise 'Inverta a string'
// var SLUG = exercisesNames[7];
// var exercise = exercises[SLUG];
// var answer = exercise.string.split('').reverse().join('');
// var isCorrect = getResponse(token, SLUG, answer);
// console.log(`O exercício ${exercise.titulo} está correto: ${isCorrect}`);





// /* 
// {
//   'volume-da-pizza': {
//     titulo: 'Volume da PIZZA!',
//     descricao: 'Faça uma função que calcule o volume de uma pizza de raio z e altura a. Assuma que a pizza é um cilindro. Envie o resultado arredondado com Math.round().',
//     entrada: { z: 3, a: 2 },
//     pontuacao: 0.5
//   */
// //   'soma-valores': {
// //     titulo: 'Soma os valores guardados no objeto',
// //     descricao: 'Qual é o valor da soma de todos os valores armazenados neste objeto?',
// //     entrada: { objeto: [Object] },
// //     pontuacao: 0.5
// //   },
// //   'n-esimo-primo': {
// //     titulo: 'Encontra o n-ésimo número primo',
// //     descricao: 'Qual é o n-ésimo número primo? Se n = 1, a resposta é 2, se n = 5, a resposta é 11.',
// //     entrada: { n: 622 },
// //     pontuacao: 0.5
// //   },
// //   'maior-prefixo-comum': {
// //     titulo: 'Maior prefixo comum',
// //     descricao: "Qual é o maior prefixo (qualquer conjunto de caracteres que começa no começo da string) que ocorre em pelo menos duas strings do array de entrada? Exemplo, para a entrada ['casa', 'casamento', 'casamos', 'banana'] a resposta esperada é 'casam'. Para a entrada ['abacaxi', 'banana'], a resposta esperada é '' (string vazia).",
// //     entrada: { strings: [Array] },
// //     pontuacao: 0.5
// //   },
// //   'soma-segundo-maior-e-menor-numeros': {
// //     titulo: 'Soma do segundo maior e menor números',
// //     descricao: 'Qual é a soma do segundo maior número do array com o segundo menor?',
// //     entrada: { numeros: [Array] },
// //     pontuacao: 0.5
// //   },
// //   'conta-palindromos': {
// //     titulo: 'Conta palíndromos',
// //     descricao: 'Quantos palíndromos existem neste array?',
// //     entrada: { palavras: [Array] },
// //     pontuacao: 0.5
// //   },
// //   'soma-de-strings-de-ints': {
// //     titulo: 'Soma de strings de ints',
// //     descricao: 'Calcule a soma dos valores inteiros representados por strings usando os métodos map e reduce.',
// //     entrada: { strings: [Array] },
// //     pontuacao: 0.5
// //   },
// //   'soma-com-requisicoes': {
// //     titulo: 'Soma com requisições',
// //     descricao: 'Calcule a soma dos valores contidos nos endpoints (cada endpoint devolve um número).',
// //     entrada: { endpoints: [Array] },
// //     pontuacao: 1
// //   },
// //   'caca-ao-tesouro': {
// //     titulo: 'Caça ao tesouro',
// //     descricao: 'Siga as URLs até encontrar o tesouro (um número).',
// //     entrada: {
// //       inicio: 'http://tecweb-js.insper-comp.com.br/exercicio/caca-ao-tesouro/yykkr'
// //     },
// //     pontuacao: 1
// //   }
// // }