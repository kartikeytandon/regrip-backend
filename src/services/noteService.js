const { notes } = require('../data');
let { currentId } = require('../data'); 

const getNotes = () => notes;

const getNoteById = (id) => notes.find(note => note.id === parseInt(id));

const createNote = (noteData) => {
  const newNote = { id: currentId++, ...noteData, tags: [] };
  notes.push(newNote);
  return newNote;
};

const updateNote = (id, noteData) => {
  const note = getNoteById(id);
  if (note) {
    Object.assign(note, noteData);
    return note;
  }
  return null;
};

const deleteNote = (id) => {
  const noteIndex = notes.findIndex(note => note.id === parseInt(id));
  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);
    return true;
  }
  return false;
};

const addTags = (id, tags) => {
  const note = getNoteById(id);
  if (note) {
    note.tags = Array.from(new Set([...note.tags, ...tags]));
    return note;
  }
  return null;
};

const removeTags = (id, tags) => {
  const note = getNoteById(id);
  if (note) {
    note.tags = note.tags.filter(tag => !tags.includes(tag));
    return note;
  }
  return null;
};

const queryNotes = (query) => {
  const { and, or, not } = query;
  return notes.filter(note => {
    const tags = note.tags;
    const andMatch = and ? and.every(tag => tags.includes(tag)) : true;
    const orMatch = or ? or.some(tag => tags.includes(tag)) : true;
    const notMatch = not ? !not.some(tag => tags.includes(tag)) : true;
    return andMatch && orMatch && notMatch;
  });
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
