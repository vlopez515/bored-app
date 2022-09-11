const express = require("express");
// allows us to merge our bookarms router w/ reviews router
const stories = express.Router({ mergeParams: true});
const {
  getAllStories,
  getStory,
  createStory,
  updateStory,
  deleteStory
} = require("../queries/stories.js");

stories.get("/", async (req, res) => {
  const { activityId } = req.params;
  const allStories = await getAllStories(activityId);
  if (allStories[0]) {
    res.status(200).json(allStories);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

stories.get("/:id", async (req, res) => {
  const { id } = req.params;
  const story = await getStory(id);
  if (story.id) {
    res.json(story);
  } else {
    res.status(404).json({ error: "story not found" });
  }
});

stories.post("/", async (req, res) => {
    try {
        const createdStory = await createStory(req.body);
        res.json(createdStory);
    } catch (err) {
        res.status(422).json({error: "error"});
    }
});

stories.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const story = await deleteStory(id);
    if (story.id) {
        res.status(200).json(story)
    } else {
        res.status(404).json({error: "error"})
    }
});

stories.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedStory = await updateStory(id, req.body);
    if (updatedStory.id) {
        res.status(200).json(updatedStory)
    } else {
        res.status(404).json({error: "no story found"})
    }
})

module.exports = stories;