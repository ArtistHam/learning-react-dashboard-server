// node_modules
const express = require("express");
// modules
const { app } = require("./app");

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
