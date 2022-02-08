import React, { useState } from "react";

// material-ui
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
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
    console.log(newNote);
  }

  function handleTextAreaClick(){
    setHidden(false);
  }
  return (
    <div>
      <form>
        {hidden ? null: <input onChange={handleChange} name="title" placeholder="Title" />}
        <textarea onClick={handleTextAreaClick} onChange={handleChange} name="content" placeholder="Take a note..." rows={hidden?1:3} />
        <Zoom
          in={!hidden}
        >
          <Fab className="fab" onClick={(event) => {
          event.preventDefault();
          props.addNote(newNote);
        }}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
