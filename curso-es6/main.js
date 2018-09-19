
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

const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};
const {nome, endereco: {cidade, estado}} = empresa
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


function mostraInfo(usuario) {
  return `${usuario.nome} tem ${usuario.idade} anos.`;
}

mostraInfo({ nome: 'Diego', idade: 23 })