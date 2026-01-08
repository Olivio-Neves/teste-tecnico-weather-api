# API de Clima – Teste Técnico

Este projeto consiste em uma API REST desenvolvida como teste técnico, com o objetivo de consumir dados climáticos de uma API externa, armazená-los em um banco de dados relacional e disponibilizá-los por meio de endpoints REST. Todo o ambiente é executado de forma conteinerizada utilizando Docker.

---

## Tecnologias Utilizadas

- Node.js  
- Express  
- Sequelize  
- PostgreSQL  
- Docker  
- Docker Compose  
- OpenWeather API  

---

## Funcionalidades

- Consumo de dados climáticos a partir da API pública da OpenWeather
- Persistência dos dados em banco de dados PostgreSQL
- API REST com os seguintes recursos:
  - Busca de dados climáticos por cidade e armazenamento no banco
  - Consulta dos dados já armazenados
- Ambiente totalmente conteinerizado para facilitar a execução e reprodução do projeto

---

## Estrutura do Projeto
src/
├── api/
│ └── fetchWeather.js
├── db/
│ └── index.js
├── models/
│ └── WeatherData.js
├── routes/
│ └── weatherRoutes.js
├── app.js
docker-compose.yml
Dockerfile
.env.example
package.json


---

## Configuração e Execução

### 1. Clonando o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```
2. Configuração das variáveis de ambiente

Crie um arquivo .env na raiz do projeto com base no arquivo .env.example e preencha as variáveis necessárias, incluindo as credenciais do banco de dados e a chave da API da OpenWeather.

3. Execução com Docker

Com o Docker e o Docker Compose instalados, execute o comando abaixo na raiz do projeto:

docker compose up --build

Esse processo irá:
- Construir a imagem da aplicação
- Criar e inicializar o banco de dados PostgreSQL
- Subir a API já conectada ao banco

Após a inicialização, a aplicação estará disponível em:

http://localhost:3000

Uso da API

Buscar e armazenar dados climáticos

Endpoint responsável por buscar os dados climáticos de uma cidade e armazená-los no banco de dados:
POST /weather/fetch/:city
Exemplo de uso:
POST http://localhost:3000/weather/fetch/Sao%20Paulo


Endpoint utilizado para listar os registros climáticos já armazenados:
GET /weather
Exemplo de uso:
GET http://localhost:3000/weather

Banco de Dados

O projeto utiliza PostgreSQL como banco de dados relacional.
A estrutura da tabela é criada automaticamente na inicialização da aplicação por meio do Sequelize.

Os dados armazenados incluem:
- Cidade
- Temperatura
- Umidade
- Descrição do clima
- Data da coleta

Observações importantes:

Informações sensíveis, como variáveis de ambiente, não são versionadas no repositório

O uso do Docker garante que o projeto possa ser executado de forma consistente em diferentes ambientes

## Demonstração da Aplicação


### Ambiente Docker em execução

![Docker em execução](docs/images/docker-up.png)

### Containers ativos

![Docker PS](docs/images/docker-ps.png)

### Busca e armazenamento de dados climáticos

![POST Weather](docs/images/postman-fetch.png)

### Consulta dos dados armazenados

![GET Weather](docs/images/postman-list.png)
