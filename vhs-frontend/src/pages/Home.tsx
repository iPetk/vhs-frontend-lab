import React, { useEffect, useState } from 'react'
import axios from 'axios'

export type VHS = {
  id:	number,
  title:	string,
  description:	string,
  genre:	string,
  duration:	number,
  releasedAt:	number,
  rentalPrice:	number,
  rentalDuration:	number,
  quantity:	number,
  thumbnail:	string
}

export type VHSList = {
  vhs: VHS[]
}


type Props = {}

export default function Home({}: Props) {
  const [vhsList, setVhsList] = useState([] as VHS[]);

  useEffect (() => {
    getVhsList()
  }, [])

  const getVhsList = async () => {
    const response = await axios.get('http://localhost:3000/api/vhs');
    setVhsList(response.data)
    console.log(vhsList)
  }

  return (
    <div>Home</div>
  )
}