# TimeShare

TimeShare is a social and community-based platform designed to facilitate the exchange of services among its users. TimeShare is not just about matching demand and supply; it's about fostering a sense of connection and support within our community. This full-stack application was developed by three students - Alys Reed, Jana Burri, Arianne Napa- as part of a group project at CodeOp Barcelona.

## Built With

- React (^18.2.0)
- React Router Dom (^6.22.3)
- Axios (^1.6.7)
- HTML5
- CSS3
- React-Bootstrap (^2.10.1)
- JavaScript (ES6)
- Node.js (20.4.0)
- Express.js (4.16.1)
- MySQL (^2.18.1)
- MySQL2 (^3.9.2)
- Sequelize (^6.37.1)
- Pusher-js (^8.4.0-rc2)
- Pusher (^5.2.0)

## Setup

### Dependencies

Run `npm install` in the project folder to install dependencies related to Express (the server). Check if the following dependencies are installed, otherwise install with the commands in the parenthesis:

- Express.js (`npm install express`)
- Nodemon (`nnpm install -g nodemon`)
- Sequelize (`npm install sequelize mysql2`)
- Pusher (`npm install pusher`)
- JSON Web Tokens (`npm install jsonwebtoken`)

Type `cd client` in the terminal and run `npm install` to install dependencies related to React (the client). Check if the following is installed:

- React Router (`npm install react-router-dom`)
- React-Bootstrap (`npm install react-bootstrap bootstrap`)
- Axios (`npm install axios`)
- Pusher-js (`npm install pusher-js`)

### Database Prep

[database](dbschema.png)

Create `.env` file in project directory and add

```
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=community
  DB_PASS=YOUR_PASSWORD
  SUPER_SECRET=YOUR_PASSWORD
```

(replace `YOUR_PASSWORD` with your actual password)

Type `mysql -u root -p` in the terminal to access MySQL and type your password.

In the MySQL terminaL, type `CREATE database community;` to create a database in MySQL.

Run `npx sequelize-cli db:migrate` in your terminal in the project folder. This will create the following tables: users, preferences, categories, services, messages.
Run `npx sequelize-cli db:seed:all` to insert the necessary data into the tables categories.

### Development

- Run `npm start` in project directory to start the Express server on port 3000
- Type`cd client` in a new terminal and run `npm run dev` to start the client server in development mode with hot reloading in port 5173.

### Pusher

In order to use the live chat, you need Pusher.

- Please create a free account on [Pusher](https://pusher.com/)
- Log in and go to Channel. Click on "Create New App"
- Give it a name (such as pusher) and choose your stack (React for frontend, Node.js for backend)
- In the section App Keys you'll find your App ID, Key and Secret. Store this in your .env file on the main folder:

```
PUSHER_APP_ID=****
PUSHER_KEY=****
PUSHER_SECRET==****
```

- In the frontend, create a .env file in the client directory and add the following:

```
VITE_PUSHER_KEY=****
```
