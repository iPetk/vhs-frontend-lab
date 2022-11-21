import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { VHS } from '../types'
import axios from 'axios'
import Edit from './Edit'

type Props = {}

export default function VHSDetails({}) {

  const { vhsId } = useParams();

  const [vhsInfo, setVhsInfo] = useState<VHS>()

  const fetchSingleVHS = async () => {
    const response = await axios.get(`http://localhost:3000/api/vhs/${vhsId}`);
    setVhsInfo(response.data);
    console.log(response.data);
    console.log(vhsInfo, "info")
  }

  useEffect(() => {
    fetchSingleVHS()
  }, [])

  return (
    <div>
      <h1>{vhsInfo?.title}</h1>
      <Link to="/edit" state={ vhsInfo }>
        <button>EDIT</button>
      </Link>

    </div>
  )
}