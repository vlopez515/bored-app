const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (err) {
    return err;
  }
};

const getUser = async (id) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
    return oneUser;
  } catch (err) {
    return err;
  }
};

const createUser = async (user) => {
  try {
    const { username, email } = user;
    const newUser = await db.one(
      "INSERT INTO users (username, email) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, email]
    );
    return newUser;
  } catch (err) {
    return err;
  }
};

const updateUser = async (user, id) => {
  try {
    const { username, email } = user;
    const updatedUser = await db.one(
      "UPDATE users SET username=$1, email=$2, WHERE id=$3 RETURNING *",
      [username, email, id]
    );
    return updatedUser;
  } catch (err) {
    return err;
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE id=$1 RETURNING *",
      id
    );
    return deletedUser;
  } catch (err) {
    return err;
  }
};

const getAllActivitiesForUser = async (id) => {
  try {
    const activitiesByUser = db.any(
      `SELECT 
                activity_id, user_id, name, is_favorite, type
            FROM
                users_activities
            JOIN
                users
            ON
                users.id = users_activities.user_id
            JOIN
                activities
            ON
                activities.id = users_activities.activity_id
            WHERE
                users_activities.user_id = $1
            `,
      id
    );
    return activitiesByUser;
  } catch (err) {
    return err;
  }
};

const addNewActivityForUser = async (userId, activityId) => {
  try {
    const addedActivity = await db.oneOrNone(
      `INSERT INTO users_activities (user_id, activity_id) VALUES ($1, $2) RETURNING *`,
      [userId, activityId]
    );
    return addedActivity;
  } catch (err) {
    return err
  }
};

module.exports = {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
  getAllActivitiesForUser,
  addNewActivityForUser,
};
