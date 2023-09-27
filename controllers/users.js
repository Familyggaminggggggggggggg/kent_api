import { v4 as uuid } from "uuid";

let users = [];

// query = old body

export const getUsers = (req, res) => {
  console.log(`Users in the database: ${users}`);

  res.send(users);
};

export const createUser = (req, res) => {
  let user = req.query;
  let username = user.username;

  let newUsername = username.replace(/\s\/\s/g, "");
  newUsername = username.replace(" ", "");

  username = newUsername;

  console.log(username);

  users.push({ username, id: uuid() });

  console.log(`User [${user.username}] added to the database.`);
};

export const getUser = (req, res) => {
  res.send(req.params.id);
};

export const deleteUser = (req, res) => {
  console.log(`user with id ${req.params.id} has been deleted`);

  users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  user.username = req.query.username;

  console.log(`username has been updated to ${req.query.username}`);
};
