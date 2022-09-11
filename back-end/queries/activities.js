const db = require("../db/dbConfig.js");

const getAllActivities = async () => {
  try {
    const allActivities = await db.any("SELECT * FROM activities");
    return allActivities;
  } catch (err) {
    return err;
  }
};

const getActivity = async (id) => {
  try {
    const oneActivity = await db.one("SELECT * FROM activities WHERE id=$1", id);
    return oneActivity;
  } catch (error) {
    return error;
  }
};

const createActivity = async (activity) => {
  const { name, type, participants, price, accessibility, is_favorite } = activity;
  try {
    const newActivity = await db.one(
      "INSERT INTO activities (name, type, participants, price, accessibility, is_favorite) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, type, participants, price, accessibility, is_favorite]
    );
    return newActivity;
  } catch (error) {
    return error;
  }
};

const deleteActivity = async (id) => {
  try {
    const deletedActivity = await db.one("DELETE FROM activities WHERE id = $1 RETURNING *", id);
    return deletedActivity;
  } catch (error) {
    return error;
  }
};

const updateActivity = async (activity, id) => {
  const { name, type, participants, price, accessibility, is_favorite } = activity;
  try {
     const updatedActivity = await db.one("UPDATE activities SET name = $1, type = $2, participants = $3, price = $4, accessibility = $5, is_favorite = $6 WHERE id = $7 RETURNING *",
  [name, type, participants, price, accessibility, is_favorite, id]);
    return updatedActivity;
  } catch (err) {
    return err;
  }
}

module.exports = { 
    getAllActivities, 
    getActivity, 
    createActivity, 
    deleteActivity,
    updateActivity
  };