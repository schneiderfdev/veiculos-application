# 🚗 CRUD VENDAS - Sistema de Venda de Veículos

Este é um projeto completo de CRUD (Create, Read, Update, Delete) para gerenciamento de veículos em uma loja de carros, desenvolvido com Spring Boot no backend e HTML, CSS e JavaScript no front-end.

O sistema permite:
- Cadastrar veículos  
- Listar veículos no estoque  
- Excluir veículos  
- Visualizar os dados na área administrativa  

## 🛠️ Tecnologias Utilizadas

Back-end:
- Java 17+
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

Front-end:
- HTML5
- CSS3
- JavaScript (Fetch API)

## 📂 Estrutura do Projeto

vendas/
src/
main/
java/com/veiculos/vendas/
controller/
model/
repository/
service/
VendasApplication.java
resources/
static/
index.html
admin.html
style.css
script.js
application.properties
pom.xml
README.md

## ⚙️ Configuração do Banco de Dados

No arquivo application.properties, configure seu MySQL:

spring.datasource.url=jdbc:mysql://localhost:3306/vendas  
spring.datasource.username=root  
spring.datasource.password=SUA_SENHA  

spring.jpa.hibernate.ddl-auto=update  
spring.jpa.show-sql=true  

Crie o banco no MySQL:

CREATE DATABASE vendas;

## ▶️ Como Executar o Projeto

1 - Clonar o repositório:

git clone https://github.com/SEU-USUARIO/vendas.git  

2 - Abrir no IntelliJ ou VS Code  

3 - Rodar a aplicação Spring Boot:

mvn spring-boot:run  

4 - Abrir no navegador:

http://localhost:8080  

## 🧪 Funcionalidades

- Cadastro de veículos  
- Listagem automática no painel administrativo  
- Exclusão de veículos  
- Integração total Front-end + Back-end via API REST  

## 📸 Demonstração

- Tela inicial com vitrine de veículos  
- Área administrativa para controle do estoque  
- Formulário de cadastro funcional  


