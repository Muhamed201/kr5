const express = require('express');
const {
  createTimer,
  getTimers,
  getTimerById,
  deleteTimer,
} = require('../controllers/timerController');

const router = express.Router();

router.post('/', createTimer);
router.get('/', getTimers);
router.get('/:id', getTimerById);
router.delete('/:id', deleteTimer);

module.exports = router;