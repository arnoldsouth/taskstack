const express = require('express');
const router = express.Router();
const {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const { protect } = require('../middleware/auth');

router.get('/', protect, getTasks);
router.post('/', protect, setTask);
router.put('/:id', protect, updateTask);
router.delete('/:id', protect, deleteTask);

// router.route('/').get(protect, getTasks).post(protect, setTask);
// router.route('/:id').delete(protect, deleteTask).put(protect, updateTask);

module.exports = router;
