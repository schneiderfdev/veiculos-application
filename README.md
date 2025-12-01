🚗 Veículos Application — CRUD de Veículos

Projeto para cadastro, listagem e exclusão de veículos.

Este sistema permite gerenciar um estoque de veículos com integração entre Front-end (HTML, CSS e JavaScript) e Back-end (Spring Boot + Java).

🚀 Funcionalidades

✅ Cadastro de veículos pelo formulário
✅ Exibição dos veículos cadastrados na área administrativa
✅ Exclusão de veículos
✅ Integração real com banco de dados via API REST
✅ Interface responsiva e moderna


 🛠️ Tecnologias Utilizadas

 Back-end

* Java
* Spring Boot
* Spring Data JPA
* MySQL
* API REST

 Front-end

* HTML5
* CSS3
* JavaScript

 Ferramentas

* Git
* GitHub
* IntelliJ IDEA

📂 Estrutura do Projeto

```
veiculos-application/
├── vendas/
│   └── src/
│       └── main/
│           ├── java/com/veiculos/vendas/
│           │   ├── model
│           │   ├── repository
│           │   ├── service
│           │   └── controller
│           └── resources/
│               ├── static/
│               │   ├── index.html
│               │   ├── script.js
│               │   └── styles.css
│               └── application.properties
└── README.md
```


⚙️ Como Executar o Projeto

 ✅ Pré-requisitos

* Java 17 ou superior
* Maven
* MySQL
* Git


✅ Passo a Passo

1️⃣ Clone o repositório:

```bash
git clone https://github.com/schneiderfdev/veiculos-application.git
```

2️⃣ Entre na pasta do projeto:

```bash
cd veiculos-application
```

3️⃣ Configure seu banco no arquivo:

```
vendas/src/main/resources/application.properties
```

Exemplo:

```
spring.datasource.url=jdbc:mysql://localhost:3306/vendas
spring.datasource.username=root
spring.datasource.password=123456
```

4️⃣ Rode o projeto:

```bash
mvn spring-boot:run
```

5️⃣ Acesse no navegador:

```
http://localhost:8080
```


📸 Demonstração

> Em breve prints do sistema.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2d698b9a-b04f-4ce9-8363-04e12a71d17a" />



🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

* Treinar integração Front-end e Back-end
* Aplicar conceitos de CRUD
* Praticar consumo de API REST
* Criar um projeto real para portfólio

👨‍💻 Autor

Schneider Ferreira Santos
Desenvolvedor Full Stack em formação
GitHub: [https://github.com/schneiderfdev](https://github.com/schneiderfdev)


✅ Projeto versionado com Git e publicado no GitHub.
