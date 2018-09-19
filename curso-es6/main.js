
// 3.1

// const arr = [1, 2, 3, 4, 5];

// const teste = arr.map(item => item + 10);

// console.log(teste);
// 3.2 
// Dica: Utilize uma constante pra function

// const usuario = { nome: 'Diego', idade: 23 };

// const mostraIdade = () => console.log(usuario.idade)

// mostraIdade(usuario);
// 3.3
// Dica: Utilize uma constante pra function

// const nome = "pedro";
// const idade = 23;

// const mostraUsuario = (nome = 'Diego', idade = 18) => (console.log({ nome, idade }));

// mostraUsuario(nome, idade);
// mostraUsuario(nome);
// 3.4

// const promise = () => new Promise( (resolve, reject) => resolve())
// console.log(promise);

// const empresa = {
//   nome: 'Rocketseat',
//   endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//   }
// };
// const {nome, endereco: {cidade, estado}} = empresa
// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC


// function mostraInfo({nome, idade}) {
//   console.log(`${nome} tem ${idade} anos.`);
// }

// mostraInfo({ nome: 'Diego', idade: 23 })

// const arr = [1, 2, 3, 4, 5, 6]

// const [x, ...y] = arr
// console.log(x);
// console.log(y);

// const soma = (...params) => params.reduce((total, next) => total + next)

// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3


// const usuario = {
//   nome: 'Diego',
//   idade: 23,
//   endereco: {
//     cidade: 'Rio do Sul',
//     uf: 'SC',
//     pais: 'Brasil',
//   }
// };

// const usuario2 = {...usuario, nome: 'Gabriel'}
// const usuario3 = {...usuario, nome: 'Lontras'}

// console.log(usuario2);
// console.log(usuario3);

// const usuario = 'Diego';
// const idade = 23;

// console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
// console.log(`O usuário ${usuario} possui ${idade} anos`);


// const nome = 'Diego';

// const usuario1 = {
//   nome,
//   idade,
//   cidade: 'Rio do Sul',
// };

// console.log(usuario1);

import { soma } from './funcoes';

console.log(soma(1, 2));