import React from "react";
import { Link } from "react-router-dom";
import { VHS } from "../types";

type Props = {
  image?: string;
  vhsId: number;
  vhsTitle: string;
  clickable: boolean;
};

export default function VhsThumbnail({
  image,
  vhsId,
  vhsTitle,
  clickable,
}: Props) {
  return (
    <>
      {clickable ? (
        <Link to={`/${vhsId}`}>
          <div>
            <img src={image} alt={vhsTitle} />
            <p>{vhsTitle}</p>
          </div>
        </Link>
      ) : (
        <div>
          <img src={image} alt={vhsTitle} />
          <p>{vhsTitle}</p>
        </div>
      )}
    </>
  );
}
