import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VHS } from '../types'
import VhsThumbnail from '../components/VHSThumbnail'
// @ts-ignore 
import placeholder from '../assets/placeholder.webp';

type Props = {}


export default function Explore({}: Props) {
  const [vhsList, setVhsList] = useState<VHS[]>([]);

  useEffect (() => {
    getVhsList();
    console.log(vhsList);
  }, [])

  const getVhsList = async () => {
    const response = await axios.get('/api/vhs');
    setVhsList(response.data);
    console.log(response.data);
  }
  return (
    <div>Explore
      {vhsList.map(item => (
        item.id&&
        <VhsThumbnail key={item.id} image={item.thumbnail ? item.thumbnail.replace(/\\/g, "/") : placeholder} vhsId={item.id} vhsTitle={item.title} clickable/>
      ))}
    </div>
  )
}