const noteService = require('../services/noteService.js');

const getNotes = (req, res) => {
  res.json(noteService.getNotes());
};

const getNoteById = (req, res) => {
  const note = noteService.getNoteById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send('Note not found');
  }
};

const createNote = (req, res) => {
  const note = noteService.createNote(req.body);
  res.status(201).json(note);
};

const updateNote = (req, res) => {
  const updatedNote = noteService.updateNote(req.params.id, req.body);
  if (updatedNote) {
    res.json(updatedNote);
  } else {
    res.status(404).send('Note not found');
  }
};

const deleteNote = (req, res) => {
  const deleted = noteService.deleteNote(req.params.id);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).send('Note not found');
  }
};

const addTags = (req, res) => {
  const updatedNote = noteService.addTags(req.params.id, req.body.tags);
  if (updatedNote) {
    res.json(updatedNote);
  } else {
    res.status(404).send('Note not found');
  }
};

const removeTags = (req, res) => {
  const updatedNote = noteService.removeTags(req.params.id, req.body.tags);
  if (updatedNote) {
    res.json(updatedNote);
  } else {
    res.status(404).send('Note not found');
  }
};

const queryNotes = (req, res) => {
  const notes = noteService.queryNotes(req.query);
  res.json(notes);
};

module.exports = {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  addTags,
  removeTags,
  queryNotes
};
