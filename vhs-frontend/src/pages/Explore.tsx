import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VHS } from '../types'

type Props = {}


export default function Explore({}: Props) {
  const [vhsList, setVhsList] = useState([] as VHS[]);

  useEffect (() => {
    getVhsList();
    console.log(vhsList);
  }, [])

  const getVhsList = async () => {
    const response = await axios.get('http://localhost:3000/api/vhs');
    setVhsList(response.data);
    console.log(response.data);
  }
  return (
    <div>Explore
            {vhsList.map(item => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </div>
  )
}