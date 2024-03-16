# TODOs List  
### Hey, Leave a 🌟 to this repo.
This is a small, full stack project using  
- Postgres
- ExpressJS
- ReactJS
- NodeJS  

![image](https://github.com/prathmesh-ka-github/TODOs-list/assets/103999608/406490a2-6b96-4a54-a7ff-971b53165351)

### From using the YouTube Course by [freeCodeCamp.org](https://youtu.be/ldYcgPKEZC8?si=c5aFCJF8BbPkQkz7)  
Learn the PERN stack in this full tutorial course for beginners. The PERN stack consists of PostgreSQL, Express, React, and Node.js. Learn how to combine these technologies to build a full-stack web application!

### This is a CRUD application.
In this application you can create a Todo, Read Todo list to display the todos, Update a Todo by editing it and Delete a Todo.  
<br/>

![image](https://github.com/prathmesh-ka-github/TODOs-list/assets/103999608/96e82c93-933d-4e02-a0b2-19456b57e5f3)

# Concepts learned from the course -
> - Drawing and Understanding overview diagrams. (ER diagrams.)
> - Making a npm project and installing required dependencies.
>   1. ExpressJS 4.18.3
>   1. Nodemon 3.1.0
>   1. pg 8.11.3
>   1. cors 2,8,5
> - # Building the Server side ExpressJS App.
> - Starting a server using ExpressJS.
> - Creating a DB and Table in Postgres at localhost.
> - Connect postgres DB to the server.
> - Making endpoints -
>    - post endpoint for inserting data in the DB.
>    - get endpoints for retreving data from the DB.
>    - put endpoints for updating data in the DB.
>    - delete endpoint for deleting specifc rows in the DB.
> - Restful api overview.
> - Setting up client side ReactJS app powered by VITE.
> - # Building the client side ReactJS App.
> - Create functions using fetch api method = POST.
> - Read functions using fetch api.
> - Delete functions using fetch api method = DELETE.
> - Created edit modal.
> - Edit function using fetch api method = PUT.

## This was a Interesting project to build!
### If you want to try it out.  
Softwares required are -
1. [Postgresql](https://www.postgresql.org/download/)
1. [Node.js](https://nodejs.org/en/download/current)

<br/>  

### Steps to try it out.  
1. Clone this repository.
1. Open it in any IDE.
1. Change directory to the Server folder and run this CLI command. 
```
npm install express
npm install nodemon
npm install pg
npm install cors

//to run server
npm run server
```    
4. Open another terminal, Change directory to Client folder and run this CLI command.
```
npm install vite

//to run frontend
npm run dev
```
5. Now start the Postgresql Server using
```
> psql -U user-name
```
6. The project is up and running with ExpressJS on Server side, ReactJS on Client side and PostgreSQL Database.
6. Now got to the URL console logged on the client terminal. which is [http://localhost:3000](http://localhost:3000).

## PORTS
Server port is 5000 and client port is 3000.  

Though if you change the Postgresql port while installation then you need to specify that port in the DB.js file (./Server/db.js). Also you will need to specify the username and password of your postgresql server.  

Run the database.sql commands to create a database and table inside  it.  
