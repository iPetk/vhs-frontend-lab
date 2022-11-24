import React, { } from 'react'
import { VHS } from '../types'

type Props = {
  handleChange: any,
  handleSubmit: any,
  handleFileChange: any,
  values?: VHS
}

export default function VhsForm({handleChange, handleSubmit, handleFileChange, values}: Props) {
  return (
    <div>VhsForm
      <form encType="multipart/form-data">
        <input type="text" id="title" value={values?.title} placeholder="Title" onChange={handleChange} required></input>
        <input type="text" id="description" value={values?.description} placeholder="Description" onChange={handleChange} required></input>
        <input type="text" id="genre" value={values?.genre} placeholder="Genre" onChange={handleChange} required></input>
        <input type="text" id="duration"  value={values?.duration} placeholder="Duration in minutes" onChange={handleChange} required></input>
        <input type="text" id="releasedAt" value={values?.releasedAt} placeholder="Release year" onChange={handleChange} required></input>
        <input type="text" id="rentalPrice" value={values?.rentalPrice} placeholder="Price" onChange={handleChange} required></input>
        <input type="text" id="rentalDuration" value={values?.rentalDuration} placeholder="How long will you be renting?" onChange={handleChange} required></input>
        <input type="file" id="thumbnail"  placeholder="" onChange={handleFileChange} ></input>
        <button type="submit" onClick={handleSubmit}>SUBMIT ME</button>
      </form>
    </div>
  )
}