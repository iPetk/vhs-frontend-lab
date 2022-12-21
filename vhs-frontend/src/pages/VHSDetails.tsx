import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { VHS } from '../types';
import axios from 'axios';
// @ts-ignore
import placeholder from '../assets/placeholder.svg';

export const VHSDetails = () => {
  const convertDuration = (duration: number) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours} hours ${minutes} minutes`;
  };
  const { vhsId } = useParams();
  const notFoundLink = useNavigate();

  const [vhsInfo, setVhsInfo] = useState<VHS>();

  const fetchSingleVHS = async () => {
    try {
      const response = await axios.get(`/api/vhs/${vhsId}`);
      setVhsInfo(response.data);
    } catch (err) {
      console.log(err);
      notFoundLink('/notfound');
    }
  };

  useEffect(() => {
    fetchSingleVHS();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {vhsInfo && (
        <div>
          <h1>{vhsInfo.title}</h1>
          <div>Description: {vhsInfo.description}</div>
          <div>Duration: {convertDuration(vhsInfo.duration)}</div>
          <div>Genre: {vhsInfo.genre}</div>
          <div>Release year: {vhsInfo.releasedAt}</div>
          <div>Rental price: {vhsInfo.rentalPrice} coins</div>
          <img
            src={vhsInfo.thumbnail ? vhsInfo.thumbnail.replace(/\\/g, '/') : placeholder}
            alt=""
          />

          <Link to="/edit" state={vhsInfo}>
            <button>EDIT</button>
          </Link>
        </div>
      )}
    </div>
  );
};
