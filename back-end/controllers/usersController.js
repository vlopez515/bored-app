const express = require("express");

const users = express.Router();
// we are destructuring the object exported from users.js
const {
  getAllActivitiesForUser,
  getAllUsers,
  addNewActivityForUser,
  getUser,
  deleteUser,
  updateUser,
  createUser,
} = require("../queries/users.js");

users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  if (deletedUser.id) {
    res.status(200).json(deletedUser);
  } else {
    res.status(404).json({ error: "user not found" });
  }
});

users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.status(200).json(allUsers);
  } else {
    res.status(404).json({ error: "no users" });
  }
});

users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user.id) {
    res.json(user);
  } else {
    res.status(404).json({ error: "user not found" });
  }
});

users.post("/", async (req, res) => {
  const createdUser = await createUser(req.body);
  if (createdUser.id) {
    res.json(createdUser);
  } else { 
    res.status(422).json({ error: "could not create user." });
  }
});

users.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedUser = await updateUser(req.body, id);
  if (updatedUser.id) {
    res.status(200).json(updatedUser);
  } else {
    res.status(422).json({ error: "we could not upate this user." });
  }
});

users.get("/:id/activities", async (req, res) => {
  const { id } = req.params;
  const usersActivities = await getAllActivitiesForUser(id);
  res.json(usersActivities);
});

users.post("/:id/activities/:activityId", async (req, res) => {
  const { id, activityId } = req.params;
  const successfulAdd = await addNewActivityForUser(id, activityId);
  if (successfulAdd) {
    res.status(201).json({ message: "success" })
  } else {
      res.status(422).json({ error: "error" });
    }
});


module.exports = users;