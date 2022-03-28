<h1>backend points managment</h1>
<br>
<h2><img style="height: 25px" src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d1.png" />  Sobre o projeto</h2>
<p>Desafio imposto a mim por <a href="https://github.com/kaiqueCovo" target="__blank">Kaique Covo</a> que consiste no backend de uma plataforma de manuseio de alunos e seus pontos.</p>

<br>

<h2><img style="height: 25px" src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png" /> Técnologias usadas no projeto</h2>
<p>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" />
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" />
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
</p>

<br>

<li><strong>JWT(json web token)</strong> foi usado para authenticaçãoa de usuário</li>
<li><strong>Bcrypt</strong> foi usado para cryptografar as senhas para salvar no banco de dados, e para verificar senha a senha do login é igual a do BD</li>
<li><strong>Docker</strong> foi usado para armazenar o banco de dados <strong>postgreSQL</strong></li>
<li><strong>Sequelize</strong> foi usado com ORM para dar instruções para o banco de dados</li>

<br>
<h2><img style="height: 25px" src="https://github.githubassets.com/images/icons/emoji/unicode/2139.png" />  Pré-requisitos: </h2>
<li><a href="https://git-scm.com/">Git</a></li>
<li><a href="https://www.docker.com/products/docker-desktop/">Docker Desktop</a></li>
<li><a href="https://nodejs.org/en/">Node.js</a></li>


<br>

```bash
    # clonar repositório
    git clone git@github.com:ruanvsrateira/backend-points-managment-.git

    # Entrar no repositório
    cd backend-points-managment-

    # Instalação de dependencias
    npm i 

    # Iniciar Container com banco de dados
    docker-compose up -d

    # Rodar api
    node src/server.js
```
<hr>


Desenvolvido por <a href="https://github.com/ruanvsrateira">Ruan Victor</a>
