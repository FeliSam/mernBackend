const Workout = require("../models/workoutModel");
const mongoose = require('mongoose')

// get all
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// get one
const getWorkout = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such wkt'})
    }
    
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such wkt" });
  }
  res.status(200).json(workout);
};

// post
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add doc
  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// delete all
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such wkt'})
    }
    
    const workout = await Workout.findOneAndDelete({ _id: id })
    
    if (!workout) {
        return res.status(404).json({ error: "No such wkt" });
      }
      res.status(200).json(workout);

}

// update all
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such wkt'})
    }
    
    const workout = await Workout.findOneAndUpdate({ _id: id }, {...req.body})
    
    if (!workout) {
        return res.status(404).json({ error: "No such wkt" });
      }
      res.status(200).json(workout);

}

module.exports = {
  getWorkouts,
  getWorkout,
    createWorkout,
  deleteWorkout, updateWorkout
};
