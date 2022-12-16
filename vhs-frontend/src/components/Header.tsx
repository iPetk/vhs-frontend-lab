import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">Home</Link> <br />
      <Link to="/explore">Discovery</Link> <br />
      <Link to="/create">Create new VHS</Link> <br />
    </div>
  );
}
