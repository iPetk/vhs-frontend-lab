import axios from 'axios'
import React, { useState } from 'react'
// import { VHS } from '../types'
import VhsForm from '../components/VhsForm'
import { useLocation, useNavigate } from 'react-router-dom';
 import {Popup} from '../components/DeletePopup'






export default function Edit() {

  const VHS  = useLocation().state

  const [editableVHS, setEditableVHS] = useState(VHS)
  // const[validationError, setValidationError] = useState(true);
   const [open, setOpen] = useState(false);
  const exploreLink = useNavigate();

  const editEntry = async () => {
    const response = await axios.patch(`/api/vhs/${VHS.id}`, editableVHS)
    .then(response => console.log(response))
    .catch(error => console.error(error));
  }

  const deleteEntry = async () => {
    const response = await axios.delete(`/api/vhs/${VHS.id}`, editableVHS)
    .then(response => console.log(response))
    .catch(error => console.error(error));
    exploreLink("/explore");
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    editEntry();
    console.log(editableVHS)
  }

  const handleChange = (event: any) => {
    setEditableVHS({
      ...editableVHS, 
      [event.target.id]: event.target.value
    })
    // validateField(event.target.id, event.target.value);
  }

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setEditableVHS({
      ...editableVHS, 
      [event.target.thumbnail]: file
    })
    console.log(editableVHS)
  }


  // function validateField(field: string, value: any) {
    
  // }

  return (
    <>
      <h1>Edit</h1>
      { <div>
        {open ? <Popup text="Are you sure you want to delete? This action is irreversible" closePopup={() => setOpen(false)} doPopupAction={deleteEntry} /> : null}
      </div> }

      <button onClick={deleteEntry}>Delete</button>

      <VhsForm handleChange={handleChange} handleSubmit={handleSubmit} handleFileChange={handleFileChange} values={editableVHS}/>
    </>
  )
} 
 