// node_modules
const express = require("express");
// data
let { users } = require("../data/users");

const getUsersRouter = () => {
  const router = express.Router();

  /**
   * @swagger
   * /api/users:
   *   post:
   *     summary: Create a new user
   *     responses:
   *       200:
   *         description: User was created successfully.
   */

  router.post("/", (req, res) => {
    const newUser = {
      id: users[users.length - 1].id + 1,
      name: req.body.name || "Name",
      surname: req.body.surname || "Surname",
      role: req.body.role || "Role",
      phone: req.body.phone || "+123123123123",
      email: req.body.email || "test@test.test",
    };
    res.send(newUser);
    users.push(newUser);
  });

  /**
   * @swagger
   * /api/users:
   *   get:
   *     summary: Get all users
   *     responses:
   *       200:
   *         description: Request was successfully handled.
   */

  router.get("/", (req, res) => {
    res.send(users);
  });

  /**
   * @swagger
   * /api/users/:uid:
   *   get:
   *     summary: Get user by id
   *     responses:
   *       200:
   *         description: Request was successfully handled.
   *       404:
   *         description: User not found.
   */

  router.get("/:uid", (req, res) => {
    const user = users.find((item) => item.id === +req.params.uid);
    if (user) {
      res.send(user);
    } else {
      res.sendStatus(404);
    }
  });

  /**
   * @swagger
   * /api/users/:uid:
   *   put:
   *     summary: Modify user by id
   *     responses:
   *       200:
   *         description: Request was successfully handled.
   *       404:
   *         description: User not found.
   */

  router.put("/:uid", (req, res) => {
    const userIndex = users.findIndex((item) => item.id === +req.params.uid);
    if (userIndex !== -1) {
      users[userIndex] = {
        ...users[userIndex],
        name: req.body.name || users[userIndex].name,
        surname: req.body.surname || users[userIndex].surname,
        role: req.body.role || users[userIndex].role,
        phone: req.body.phone || users[userIndex].phone,
        email: req.body.email || users[userIndex].email,
      };
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });

  /**
   * @swagger
   * /api/users/:uid:
   *   delete:
   *     summary: Delete user by id
   *     responses:
   *       200:
   *         description: Request was successfully handled.
   */

  router.delete("/:uid", (req, res) => {
    users = users.filter((item) => item.id !== +req.params.uid);
    res.sendStatus(200);
  });

  return router;
};

module.exports = { getUsersRouter };
