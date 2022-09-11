const db = require("../db/dbConfig.js");

const getAllStories = async (activityId) => {
  try {
    const allStories = await db.any("SELECT * FROM reviews WHERE activity_id=$1", activityId);
    return allStories;
  } catch (err) {
    return err;
  }
};

const getStory = async (id) => {
  try {
    const story = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return story;
  } catch (err) {
    return err;
  }
};

const createStory = async (story) => {
  const { activity_id, user, title, content, img } = story;
  try {
    const createdStory = await db.one(
      "INSERT INTO stories (activity_id, user, title, content, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [activity_id, user, title, content, img]);
      return createdStory;
  } catch (err) {
    return err;
  }
};

const deleteStory = async (id) => {
    try {
        const deletedStory = await db.one("DELETE FROM reviews WHERE id =$1 RETURNING *", id)
        return deletedStory;
    } catch(err) {
        return err
    }
};

const updateStory = async (id, story) => {
    const { activity_id, user, title, content, img } = story;
    try {
        const updatedStory = await db.one("UPDATE stories SET activity_id=$1, =$2, title=$3, content=$4, img=$5 WHERE id=$6 RETURNING *", 
        [activity_id, user, title, content, img, id])
        return updatedStory;
    } catch (err) {
        return err
    }
};

module.exports = { getAllStories, getStory, createStory, deleteStory, updateStory };
