const express = require('express');
const noteController = require('../controllers/noteController');

const router = express.Router();

router.get('/', noteController.getNotes);
router.get('/:id', noteController.getNoteById);
router.post('/', noteController.createNote);
router.put('/:id', noteController.updateNote);
router.delete('/:id', noteController.deleteNote);
router.put('/:id/tags', noteController.addTags);
router.delete('/:id/tags', noteController.removeTags);
router.get('/query', noteController.queryNotes);

module.exports = router;