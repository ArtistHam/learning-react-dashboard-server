let roles = [
  {
    id: 0,
    name: "Admin",
    writePermission: "1",
    modifyUserPermission: "1",
    createUserPermission: "1",
  },
  {
    id: 1,
    name: "User",
    writePermission: "1",
    modifyUserPermission: "0",
    createUserPermission: "0",
  },
];

module.exports = { roles };
