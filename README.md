<div align="center">

  <p>Owlivery Public Log é uma source para você executar como webhook e coletar os dados das vendas do seu bot e colocar em uma log pública para todos poderem visualizar!</p>

</div>

<br>

## Requisitos

- É necessário que você crie o arquivo production.env para poder executar o código.
- Caso queira hospedar no nosso perceiro Square Cloud será necessário criar também um arquivo squarecloud.app

## production.env

Vamos criar seu arquivo production.env

> Crie um novo arquivo dentro da pasta _environments_ com nome _production.env_, agora é necessário coletar as informações do seu arquivo conforme o exemplo abaixo:

Copie, cole no seu arquivo production.env e modifique as informações

```
ENVIRONMENT=PRODUCTION
#Aqui será PRODUCTION quando o ambiente for produção, você pode colocar LOCAL ou DEVELOPMENT caso queira iniciar em outros ambientes

TOKEN=MTADASSDRWCDSFGrffghhnjyfvjjtdfr.yui.kh.lQavBiba-fNqZfKwmb1_AjT4ryV1HwTlIkhe-q
#Este é o token do BOT do discord, você pode pega-lo diretamente no portal do Desenvolvedor

CLIENTID=1054254780234089111
# Este aqui é o ID do seu bot, também pode ser pego no portal do Desenvolvedor

CHANNELID=1087345121243878290
# Este aqui é o ID do canal o qual você quer enviar as logs, caso não consiga pegar esse ID, siga o este tutorial: https://youtu.be/xX-aWpqnphI

EMBEDCOLOR='#0c00ba'
# Este aqui é a cor da modal das suas logs, ela esta em Hexadecimal, pode utilizar este site para coletar este dado de forma simples: https://g.co/kgs/DeHYiT
```

## squarecloud.app

Vamos criar seu arquivo, você pode seguir a documentação no site https://docs.squarecloud.app/suporte/como-hospedar

> Crie um novo arquivo na pasta raiz nome _squarecloud.app_, agora é necessário preencher informações do seu arquivo conforme o exemplo abaixo:

Copie, cole no seu arquivo squarecloud.app e modifique as informações

```
DISPLAY_NAME=Owlivery Public Log
#Aqui será o nome da sua aplicação, este dado você pode modificar

DESCRIPTION=API de logs Públicas
# Aqui será a aplicação da sua aplicação, este dado você pode modificar

MAIN=app.js
# Aqui será o arquivo principal da aplicação, Esse dado não precisa modificar, pode mantê-lo assim

MEMORY=512
# Aqui será a quantidade de RAM da sua aplicação, Esse dado não precisa modificar, pode mantê-lo assim

VERSION=recommended
# Aqui será a versão para sua aplicação, Esse dado não precisa modificar, pode mantê-lo assim

SUBDOMAIN=owlivery-public
# Aqui será o link para acessar sua aplicação, Você precisa definir um nome próprio para ele

START=npm run start
# Aqui será o comando para executar sua aplicação, Esse dado não precisa modificar, pode mantê-lo assim

```

Agora é só você hospedar o seu webhook na Square Cloud ou em qualquer outro site, pegar o link dele e adicionar ao seu bot.

Execute o comando /configurar e vá em |🪝 Add Webhook| e depois vá em |➕ Add/Edit Webhook V2| e cole o link do seu webhook seguido de |v1/owlivery/catch|

> Exemplo: https://owlivery-public.squareweb.app/v1/owlivery/catch
