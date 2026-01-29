import { useState, useEffect } from 'react';
import CreateNoteForm from '../components/CreateNoteForm/CreateNoteForm';
import { getNotes } from '../utilities/notes-api';
import NoteList from '../components/NoteList/NoteList';

export default function HomePage() {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    getNotes().then(data => setNotes(data));
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
      <CreateNoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} />
    </div>
  );
}