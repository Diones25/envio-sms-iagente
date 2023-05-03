
![img](./src/public/img/sms.jpg)
## Envio de SMS com Node/Express, Axios e EJS

Sistema de envio de sms criado com node, express e para compilar o HTML foi utilizado o EJS, o sistema integra o envio de sms da plataforma: [https://app.iagentesms.com.br](https://app.iagentesms.com.br), para integração funcionar é preciso criar uma conta com email comercial e utilzar a "url_api" de exemplo junto com as querys de usuários, senha e a mensagem.

## Instalação

Para rodar o projeto deve ter instalado o Node JS e o NPM e rodar os comandos abaixo:

```bash
  npm install 
  npm run start
```

## Documentação da API

#### Redenzira página home de envio de SMS

```
  GET /
```
*Sem parâmetros
##### Essa rota redenriza a página de envio de sms com o número de celular que vai receber a mensagem de sms e a mensagem a ser enviada.

```
  POST /add
```
*Parâmetros:\
query => ?metodo=envio \
query => &usuario= seu usuário *email \
query => &senha= sua senha \
query => &celular = celular que vai receber o sms \
query => &mensagem = mensagem a ser enviada \

#### Retorna um JSON

##### Em caso de sucesso:

```
  Deve retornar um JSON com o resultado de sucesso
{
  "OK"
}
````

##### Em caso de erro:

```
  Deve retornar um JSON com o resultado do erro
{
  "Mensagem de erro"
}
````

## Stack utilizada

**Back-end:** Node, Express \
**Front-end:** EJS, Bootstrap

## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack, usando as tecnologias Node JS no Back-end e React no Fron-end, API Restfull e estudando outras tecnologias interessantes e em alta no mercado.

## 🛠 Habilidades
Javascript, HTML, CSS, Node JS, PHP, Mongo DB, React, Sequelize ORM, Mongoose ORM...

## 🔗 Links
[![GitHub](https://img.shields.io/badge/github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Diones25)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/diones-pereira-alves-31bb3969/)

