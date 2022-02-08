import React, { useState } from "react";

// material-ui
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    note: ""
  });

  const [hidden, setHidden] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
    // console.log(newNote);
  }

  function handleTextAreaClick() {
    setHidden(false);
  }

  function submitNote(event) {
    props.addNote(newNote);
    event.preventDefault();
    setNewNote({
      title: "",
      note: ""
    });
  }

  return (
    <div>
      <form>
        {hidden ? null : <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title}/>}
        <textarea onClick={handleTextAreaClick} onChange={handleChange} name="note" placeholder="Take a note..." rows={hidden ? 1 : 3} value={newNote.note}/>
        <Zoom
          in={!hidden}
        >
          <Fab className="fab" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
