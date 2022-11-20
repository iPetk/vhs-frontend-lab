import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

export default function Header({}: Props) {
  return (
    <div>
      <Link to="/">Home</Link> <br />
      <Link to="/explore">Discovery</Link> <br />
    </div>
  )
}