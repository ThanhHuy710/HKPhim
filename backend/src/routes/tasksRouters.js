import express from 'express';
import { getAllTasks } from '../../controllers/tasksControllers.js';
// import { createTasks,updateTasks,deleteTasks } from '../../controllers/tasksControllers.js';
//dùng router để điều hướng 
const router=express.Router();

router.get("/",getAllTasks);

// router.post("/",createTasks);

// router.put("/:id",updateTasks);

// router.delete("/:id",deleteTasks);

export default router;