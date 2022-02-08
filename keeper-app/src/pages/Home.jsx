import React, { useState, useEffect } from 'react';
import Note from "../components/Note";
import notes from "../Notes";
import CreateArea from '../components/CreateArea';
import axios from "axios";

function Home() {

  const [noteList, setNoteList] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:4000/notes")
    .then((response)=>{
      setNoteList(response.data);
    });
    // setNoteList()
  });


  function addNote(newNote) {
    axios.post("http://localhost:4000/notes/addNotes", newNote)
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  function deleteNote(id) {
    // console.log(id);
    axios.post("http://localhost:4000/notes/delete/"+id, {})
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  return (
    <div>
      <CreateArea addNote={addNote} />
      {noteList.map((note, index) => {
        return (
          <Note key={index} id={note._id} title={note.title} content={note.note} deleteNote={deleteNote} />
        );
      })}
      {/* <Note/> */}
    </div>
  );
}
export default Home;