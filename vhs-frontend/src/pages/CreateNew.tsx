import axios from 'axios'
import React, { useState } from 'react'
import { VHS } from '../types'
import { useNavigate } from 'react-router-dom';
import VhsForm from '../components/VhsForm'



export default function CreateNew() {
  const exploreLink = useNavigate();
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
  const config = {     
    headers: { 'Content-Type': 'multipart/form-data' }
}

  const createNewEntry = async (data: FormData) => {
    const response = await axios.post('/api/vhs', data, config)
    .then(response => console.log(response))
    .catch(error => console.error(error));
  }

  const createData = () => {
    const data = new FormData();
    data.append("title", newVHS.title);
    data.append("description", newVHS.description);
    data.append("genre", newVHS.genre);
    data.append("duration", newVHS.duration.toString());
    data.append("releasedAt", newVHS.duration.toString());
    data.append("rentalPrice", newVHS.rentalPrice.toString());
    data.append("rentalDuration", newVHS.rentalDuration.toString());
    if (newVHS.thumbnail) {data.append("thumbnail", newVHS.thumbnail)};
    return data;
  }

  const handleSubmit = (event: any) => {
    const data = createData()
    event.preventDefault();
    createNewEntry(data);
    exploreLink("/explore");
  }

  const handleChange = (event: any) => {
    setNewVHS({
      ...newVHS, 
      [event.target.id]: event.target.value
    })
    console.log(newVHS)
    // validateField(event.target.id, event.target.value);
  }

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setNewVHS({
      ...newVHS, 
      [event.target.id]: file
    })
    console.log(newVHS)
  }

  // function validateField(field: string, value: any) {
    
  // }

  return (
    <>
      <h1>CreateNew</h1>

      <VhsForm handleChange={handleChange} handleSubmit={handleSubmit} handleFileChange={handleFileChange}/>
    </>
  )
} 

function exploreLink(arg0: string) {
  throw new Error('Function not implemented.')
}
