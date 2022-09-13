const express = require("express");
const activities = express.Router();
const {
  getAllActivities,
  getActivity,
  createActivity,
  deleteActivity,
  updateActivity
} = require("../queries/activities.js");


activities.get("/", async (req, res) => {
  const allActivities = await getAllActivities();
  if (allActivities[0]) {
    res.status(200).json(allActivities);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

activities.get("/:id", async (req, res) => {
  const { id } = req.params;
  const activity = await getActivity(id);
  if (activity) {
    res.json(activity);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

activities.post("/", async (req, res) => {
  if(req.body) { 
     const createdActivity = await createActivity(req.body)
      res.status(200).send(createdActivity);
    } else{
      res.status(404).send('Error');
    };
  });

//     try {
//         const activity = await createActivity(req);
//         res.json(activity)
//       } catch (error) {
//         return error;
//       }
// });

activities.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedActivity = await deleteActivity(id);
  if (deletedActivity.id) {
    res.status(200).json(deletedActivity)
  } else {
    res.status(404).json("Activity not found!");
  }
});

activities.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedActivity = await updateActivity(req.body, id);
  if (updatedActivity.id) {
    res.status(200).json(updatedActivity);
  } else {
    res.status(404).json({error: "Activity NOT updated"});
  }
})

module.exports = activities;