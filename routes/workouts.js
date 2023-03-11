const express = require("express");
const Workout = require("../models/workoutModel");

const {
  getWorkouts,
  getWorkout,
  createWorkout, deleteWorkout,
  updateWorkout
} = require("../controllers/workoutControllers");
const router = express.Router();

// Get all
router.get("/", getWorkouts);

// Get one
router.get("/:id", getWorkout);

// Post
router.post("/", createWorkout);

// Delete
router.delete("/:id", deleteWorkout);

// UPDATE
router.patch("/:id",
updateWorkout);

module.exports = router;
