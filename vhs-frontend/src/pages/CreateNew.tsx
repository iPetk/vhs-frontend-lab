import axios from 'axios'
import React, { useState } from 'react'
import { VHS } from '../types'
import VhsForm from '../components/VhsForm'

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

      <VhsForm handleChange={handleChange} handleSubmit={handleSubmit}/>
    </>
  )
} 