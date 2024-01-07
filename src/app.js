// node_modules
const express = require("express");
// controllers
const { getUsersRouter } = require("./routes/usersRouter");
const { getRolesRouter } = require("./routes/rolesRouter");
// documentation
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Dashboard API",
      version: "1.0.1",
    },
  },
  apis: ["./src/routes/*.js", "./src/app.js"], // files containing annotations as above
};

const swaggerSpec = swaggerJSDoc(options);

const app = express();

app.use("/static", express.static("./src/static/"));
app.use(express.json());

/**
 * @swagger
 *  tags:
 *   - name: Users
 *     description: Users endpoints
 *   - name: Roles
 *     description: Roles endpoints
 */

// Users
app.use("/api/users", getUsersRouter());

// Roles
app.use("/api/roles", getRolesRouter());

// Swagger
app.use("/api/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = { app };
