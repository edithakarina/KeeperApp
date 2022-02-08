import React, { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./Notes";
import CreateArea from './components/CreateArea';

function App() {

  const [noteList, setNoteList] = useState(notes);

  function addNote(newNote) {
    // const addNote = newNote;
    // const addNote = {
    //   key: noteList.length+1,
    //   ...newNote
    // }
    console.log(addNote);
    setNoteList((prevValue) => {
      return [...prevValue, newNote];
    });
    console.log(noteList);
  }

  function deleteNote(id) {
    setNoteList(prevValue => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteList.map((note, index) => {
        return (
          <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote} />
        );
      })}
      {/* <Note/> */}
      <Footer />
    </div>
  );
}
export default App;