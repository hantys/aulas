
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

// import { soma } from '../funcoes';

// console.log(soma(1, 2));

// const minhaPromisse = () => new Promise((resolve, reject) => {
//   setTimeout(() => { resolve('ok')}, 2000);
// });

// const executaPromise = async () => {
//   console.log(await minhaPromisse());
//   console.log(await minhaPromisse());
//   console.log(await minhaPromisse());
// };

// executaPromise();

import axios from 'axios';

// class Api {
//   static async getUserInfo(username) {
//     try {
//       const response = await axios.get(`https://api.github.com/users/${username}`)
//       console.log(response);
//     } catch (error) {
//       console.warn(`Erro na API: ${error}`);
//     }
//   }
// }

// Api.getUserInfo('hantystheger');
// Api.getUserInfo('hantys');

// Funão delay aciona o .then após 1s
// const delay = (params) => new Promise(resolve => {
//   setTimeout(() => { resolve(params) }, 1000);
// });

// const umPorSegundo = async () => {
//   console.log(await delay('1s'));
//   console.log(await delay('2s'));
//   console.log(await delay('3s'));

// };

// umPorSegundo();

// const getUserFromGithub = async (user) => {
//   try {
//     const response = await axios.get(`https://api.github.com/users/${user}`)
//     console.log(response.data);
//   } catch (error) {
//       console.log('Usuário não existe');
//   }
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

// class Github {
//   static async getRepositories(repo) {
//     try {
//       const response = await axios.get(`https://api.github.com/repos/${repo}`)
//       console.log(response.data);
//     } catch (error) {
//       console.log('Repositório não existe');
//     }
//   }
// }

// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('hantys/simple-ansible');

// const buscaUsuario = async (usuario) => {
//   try {
//     const response = await axios.get(`https://api.github.com/users/${usuario}`)
//     console.log(response.data);
//   } catch(error) {
//     console.log('Usuário não existe');
//   }
// } 

// buscaUsuario('hantys');