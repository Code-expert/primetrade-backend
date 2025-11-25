import express from 'express';
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} from '../../controllers/taskController.js';
import { protect } from '../../middleware/authMiddleware.js';
import { validateTaskCreate, validateTaskUpdate } from '../../validations/taskValidation.js';

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getTasks)
  .post(validateTaskCreate, createTask);  

router.route('/:id')
  .get(getTask)
  .put(validateTaskUpdate, updateTask)    
  .delete(deleteTask);

export default router;
