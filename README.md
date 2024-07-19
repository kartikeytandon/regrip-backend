# Node.js Note-Taking API

## Overview

This is a RESTful API for a note-taking application. The API allows users to create, read, update, and delete notes, manage tags for each note, and perform complex queries based on these tags.

## API Endpoints

### Basic Note Operations
- `POST /notes`: Create a new note.
- `GET /notes`: Retrieve all notes.
- `GET /notes/:id`: Retrieve a single note by its ID.
- `PUT /notes/:id`: Update a note by its ID.
- `DELETE /notes/:id`: Delete a note by its ID.

### Tag Management
- `PUT /notes/:id/tags`: Add tags to a note.
- `DELETE /notes/:id/tags`: Remove tags from a note.

### Querying
- `GET /notes/query`: Retrieve notes based on a logical tag query.

## Setup and Running Instructions

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the server:
    ```bash
    npm start
    ```
5. Run tests:
    ```bash
    npm test
    ```

## Examples

### Create a Note
```bash
curl -X POST http://localhost:3000/notes -H "Content-Type: application/json" -d '{"title": "Test Note", "content": "This is a test note"}'