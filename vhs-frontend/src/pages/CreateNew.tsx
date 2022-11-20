import axios from 'axios'
import React, { useState } from 'react'
import { VHS } from '../types'

type Props = {}

export default function CreateNew({}: Props) {
  const initialEntry: VHS =   {
    title:	'',
    description:	'',
    genre:	'',
    duration:	0,
    releasedAt:	0,
    rentalPrice:	0,
    rentalDuration:	0,
    thumbnail:	undefined
  }

  const [newVHS, setNewVHS] = useState(initialEntry)
  const[validationError, setValidationError] = useState(true);

  const createNewEntry = async () => {
    const response = await axios.post('http://localhost:3000/api/vhs', newVHS)
    .then(response => console.log(response))
    .catch(error => console.error(error));
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createNewEntry();
    console.log(newVHS)
  }

  const handleChange = (event: any) => {
    setNewVHS({
      ...newVHS, 
      [event.target.id]: event.target.value
    })
    // validateField(event.target.id, event.target.value);
  }

  // function validateField(field: string, value: any) {
    
  // }

  return (
    <>
      <h1>CreateNew</h1>

      
      <form encType="multipart/form-data">
        <input type="text" id="title" value={newVHS.title} placeholder="Title" onChange={handleChange} required></input>
        <input type="text" id="description" value={newVHS.description} placeholder="Description" onChange={handleChange} required></input>
        <input type="text" id="genre" value={newVHS.genre} placeholder="Genre" onChange={handleChange} required></input>
        <input type="text" id="duration" value={newVHS.duration} placeholder="Duration" onChange={handleChange} required></input>
        <input type="text" id="releasedAt" value={newVHS.releasedAt} placeholder="Release year" onChange={handleChange} required></input>
        <input type="text" id="rentalPrice" value={newVHS.rentalPrice} placeholder="Price" onChange={handleChange} required></input>
        <input type="text" id="rentalDuration" value={newVHS.rentalDuration} placeholder="How long will you be renting?" onChange={handleChange} required></input>
        <input type="file" id="thumbnail" value={newVHS.thumbnail} placeholder="" onChange={handleChange} ></input>
        <button type="submit" onClick={handleSubmit}>SUBMIT ME</button>
      </form>
    </>
  )
}