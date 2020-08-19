EcmaScript - Nova forma de escrever o JavaScript

Babel
 - Converte as classes - que não são entendidas nativamente
pelos navegadores, em uma sintaxe de funções para o código poder
ser entendido pelos navegadores.

 - O babel cria outro arquivo .js, convertido de EcmaScript para JavaScript.


Webpack - Servidor para LiveReload, atualiza o babel a cada alteração salva no código.
 - Servidor de Desenvolvimento

 ******* iniciando uma aplicação

 npm init na raiz do projeto

 npm install @babel/cli
 npm install @babel/preset-env
 npm install @babel/core
 npm install @babel/plugin-proposal-object-rest-spread //Para utilizar os operadores rest e spread = ...

 **** Configurar Babel
 - Criar arquivo .babelrc na raiz do projeto
    - instanciar os presets;

- Criar arquivo index.html e main.js;
- Configurar script dev no package.json
    - {"dev": "babel ./main.js -o bundle.js -w "}


** O source do script no HTML deve ser o bundle.js**

- Webpack - serve para rodar arquivos que vão alem do inde.html e main .js e todos os arquivos continuarao sendo convertidos no bundle.js

-- Adicionando webpack na aplicação
    - npm install webpack webpack-cli -D

    - criar arquivo de configuração do Webpack

    nome: webpack.config.js
    Ver dados do arquivo acima...

    depois de configurado o arquivo, deve instalar o babel loader
    - npm install babel-loader

    Alterar script no package.json para conseguir rodar o webpack
    - "dev": "webpack --mode=development -w"

    Instalar webpack-dev-server
    - npm install webpack-dev-server -D
        - adicionar o dev-server no webpack.config
        - alterar script no package.json

        A partir de agora a aplicação está rodando em um servidor local

-- ***** ASYNC AWAIT *****
    - o async await é uma função do ES8 que não é nativa no Babel, então, deve-se instalar as seguintes dependencias...
        - npm install @babel/plugin-transform-async-to-generator -D - colocar nos plugins do babelrc
        - npm install @babel/polyfill -D - colocar no entry do webpack.config

-- ***** AXIOS *****
    - Utilizado para acessar as api's externas do código
    - npm install axios

    importar no main.js para ser utilizado
