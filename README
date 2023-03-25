<div align="center">

  <p>🌩️ AgDB é um banco de dados baseado em JSON pequeno, leve, 0 dependências e fácil de usar que permite aos usuários obter persistência de dados de forma rápida e fácil, fornecendo um mecanismo para armazenar e acessar dados JSON para NodeJS.</p>

  <a href="https://npmjs.com/package/agdb">
    <img src="https://img.shields.io/npm/v/agdb?color=green">
  </a>
  <a href="https://bundlephobia.com/result?p=agdb">
    <img src="https://img.shields.io/bundlephobia/minzip/agdb?color=green">
  </a>
  <img src="https://img.shields.io/badge/dependencies-0-brightgreen?color=blue">
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue">
  </a>
</div>

<br>

> Exemplo: adicione um post em users.alee e salve no banco de dados.

```js
db.get("users")
  .get("alee")
  .push({ title: "Post 1" })
  .save();
```

## Características

- 🏎️ Velocidades incrivelmente rápidas - Velocidades de leitura e gravação rápidas, mesmo ao lidar com grandes volumes de dados.
- 📦 [Tamanho minúsculo](https://bundlephobia.com/result?p=agdb) - O tamanho minúsculo do código-fonte permite um carregamento incrivelmente rápido quando a velocidade é importante.
- ⚡️ Versátil - Pode ser usado com NodeJS, no navegador ou no Electron.

## Uso

instale agDB com NPM:

```
$ npm i agdb
```

Uso básico com NodeJS:

```js
const agDB = require("agdb");

// iniciar db com "./db.agdb" local de armazenamento
const engine = new agDB.localFileEngine("./db.agdb");
const db = new agDB(engine);

// definir valor db padrão se a db estiver vazia
db.default({ users: [] });

// add novo dado em users
db.get("users").push({ name: "alee" });

// atualizar users.name do primeiro usuário
db.get("users")
  .get(0)
  .get("name")
  .set("jeff");

// salvar alterações na db
db.save();
```

O arquivo de banco de dados `db.agdb` é atualizado para:

```js
{
  "users": [
    {"name":"jeff"}
  ]
}
```

Uso com Typescript:

```ts
import agDB from "agdb";

// iniciar db com "./db.agdb" local de armazenamento
const engine = new agDB.localFileEngine("./db.agdb");
const db = new agDB(engine);
```

O agDB foi projetado para ser flexível, podendo ser usado no NodeJS, no navegador ou até mesmo no Electron com adaptações muito pequenas no código. Exemplos de usos podem ser vistos abaixo:
- [Uso do navegador](./examples/browser.md)
- [Servidor NodeJS](./examples/node.md)

## Engine API

Para expandir a funcionalidade, cada banco de dados inicializado pode ser expandido com as seguintes opções, no formato `new Engine(path, options);`.

- `serialize` - função para serializar dados antes de escrevê-los no banco de dados.
- `deserialize` - função para desserializar dados do banco de dados.

## Exemplos de operações de banco de dados

Altere o valor da chave no banco de dados:

```js
db.get("old").set("newData");
// Antes: {"old": "oldData"}
// Depois: {"old": "newData"}
```

Retornar o valor Raw de uma propriedade selecionada:

```js
// Antes {"list": [1, 2, 3]}
db.get("list").value(); // returns [1, 2, 3]
```

Defina um valor para a chave:

```js
db.set("chave", "valor").save();
// Antes: {}
// Depois: {"chave": "valor"}
```

Deletar um valor:

```js
db.get("chave").delete();
// Antes: {'chave': 'valor', 'chave2': 'valor2'}
// Depois: {'chave2': 'valor2'}
```

Se você excluir um valor de uma lista, ele deixará um valor nulo no lugar dos dados excluídos:

```js
db.get("chave")
  .get(1)
  .delete();
// Antes: {'chave': [1, 2, 3]}
// Depois: {'chave': [1, null, 3]}
```

Se você não quer este comportamento, você pode passar `true` para a função `.delete()` para não deixar um valor nulo no lugar dos dados excluídos:

```js
db.get("chave")
  .get(1)
  .delete(true);
// Antes: {'chave': [1, 2, 3]}
// Depois: {'chave': [1, 3]}
```

Defina um valor para a chave2 dentro da chave:

```js
db.set("chave.chave2", "valor").save();
// Antes: {}
// Depois: {"chave": {"chave2": "valor"}}
```

Observe que as funções `set` e `get` permitem o uso de . para as chaves, se você não quiser esse comportamento, você pode ter uma chave com um . incluso, você pode desativar fornecendo um parâmetro extra :

```js
db.get("um.dois", false).set("tres.quatro", "teste", false);
// Antes: {"um.dois": {}}
// Depois: {"um.dois": {"tres.quatro": "teste"}}
```

Definir dados padrão para db vazia:

```js
db.default({ name: "alee" });

// atual db: {}
console.log(db.get("name")); // imprime "alee"
```

Executar um Push no Array:

```js
db.get("lista")
  .push(1)
  .save();

// Antes: {'lista': []}
// Depois: {'lista': [1]}
```

Filtrar todos os elementos abaixo de 5:

```js
// Antes = {'list': [1,2,6,1]}
// output = {'list': [6]}

db.get("lista").filter(i => i >= 5);

// salvar db
db.save();
```

Alterar elemento com valor mais alto:

```js
// Antes = {'users': [{valor: 10}, {valor: 5}, {valor: 6}]}
// Depois = {'users': [{valor: "alterado"}, {valor: 6}, {valor: 5}]}

db.get("users").sort((a, b) => b.valor - a.valor);

// Alterar elemento com valor mais alto
db.get("users")
  .get(0)
  .get("valor")
  .set("alterado");

// salvar db
db.save();
```

Execute um Map em uma Lista, e resulte a raiz quadrada de todos os números na lista:

```js
// Antes = {'data': [1,2,3,4,5]}
// Depois = {'data': [1,4,9,16,25]}

// raiz quadrada de todos os números na lista
db.get("data").map(x => x ** 2);

// salvar db
db.save();
```

Reduzir lista, encontrando todos os valores da lista e os somando:

```js
// Antes = {'data': [1,2,3,4,5]}
// Depois = {'data': 15}

// find value of all numbers in list summed together
db.get("data").reduce(
  (total, atual) => total + atual
);

// salvar db
db.save();
```

Aproveite as funções Serialize e Deserialize para criptografar e descriptografar dados:

```js
const engine = new agDB.localFileEngine("./db.agdb", {
  serialize: data => {
    // criptografar e serializar dados
    return encrypt(JSON.stringify(data));
  },
  deserialize: data => {
    // descriptografar e desserializar dados
    return JSON.parse(decrypt(data));
  }
});
const db = new agDB(engine);
```

## Crédito

Autor: [Tom](https://github.com/TomPrograms) Colaborador - Reeditor: [AleeQuintino](https://github.com/TomPrograms)

## Licença

[MIT](LICENSE)
