// node_modules
const express = require("express");
// data
let { roles } = require("../data/roles");

const getRolesRouter = () => {
  const router = express.Router();

  /**
   * @swagger
   * /api/roles:
   *   post:
   *     summary: Create a new role
   *     tags:
   *      - Roles
   *     responses:
   *       200:
   *         description: Role was created successfully.
   */

  router.post("/", (req, res) => {
    const newRole = {
      id: users[users.length - 1].id + 1,
      name: req.body.name || "Name",
      writePermission: req.body.writePermission || "1",
      modifyUserPermission: req.body.modifyUserPermission || "1",
      createUserPermission: req.body.createUserPermission || "1",
    };
    res.send(newUser);
    roles.push(newUser);
  });

  /**
   * @swagger
   * /api/roles:
   *   get:
   *     summary: Get all roles
   *     tags:
   *      - Roles
   *     responses:
   *       200:
   *         description: Request was successfully handled.
   */

  router.get("/", (req, res) => {
    res.send(roles);
  });

  /**
   * @swagger
   * /api/roles/:uid:
   *   get:
   *     summary: Get role by id
   *     tags:
   *      - Roles
   *     responses:
   *       200:
   *         description: Request was successfully handled.
   *       404:
   *         description: Role not found.
   */

  router.get("/:uid", (req, res) => {
    const role = roles.find((item) => item.id === +req.params.uid);
    if (role) {
      res.send(role);
    } else {
      res.sendStatus(404);
    }
  });

  /**
   * @swagger
   * /api/roles/:uid:
   *   put:
   *     summary: Modify role by id
   *     tags:
   *      - Roles
   *     responses:
   *       200:
   *         description: Request was successfully handled.
   *       404:
   *         description: Role not found.
   */

  router.put("/:uid", (req, res) => {
    const roleIndex = roles.findIndex((item) => item.id === +req.params.uid);
    if (userIndex !== -1) {
      roles[roleIndex] = {
        ...roles[roleIndex],
        name: req.body.name || roles[roleIndex].name,
        surname: req.body.surname || roles[roleIndex].surname,
        role: req.body.role || roles[roleIndex].role,
        phone: req.body.phone || roles[roleIndex].phone,
        email: req.body.email || roles[roleIndex].email,
      };
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });

  /**
   * @swagger
   * /api/roles/:uid:
   *   delete:
   *     summary: Delete role by id
   *     tags:
   *      - Roles
   *     responses:
   *       200:
   *         description: Request was successfully handled.
   */

  router.delete("/:uid", (req, res) => {
    roles = roles.filter((item) => item.id !== +req.params.uid);
    res.sendStatus(200);
  });

  return router;
};

module.exports = { getRolesRouter };
