// node_modules
const express = require("express");
// controllers
const { getUsersRouter } = require("./routes/usersRouter");
// documentation
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.js'], // files containing annotations as above
};

const swaggerSpec = swaggerJSDoc(options);


const app = express();

app.use("/static", express.static("./src/static/"));
app.use(express.json());

// Films
app.use("/api/users", getUsersRouter());

app.use("/api/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = { app };
