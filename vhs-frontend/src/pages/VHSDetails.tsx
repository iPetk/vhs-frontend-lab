import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { VhsThumbnail } from '@components';
import { VHS } from '@types';
import { convertDuration } from '@utils';
import axios from 'axios';

export const VHSDetails = () => {
  const { vhsId } = useParams();
  const navigate = useNavigate();

  const [vhsInfo, setVhsInfo] = useState<VHS>();

  const fetchSingleVHS = async () => {
    try {
      const response = await axios.get(`/api/vhs/${vhsId}`);
      setVhsInfo(response.data);
    } catch (err) {
      console.log(err);
      navigate('/not-found');
    }
  };

  useEffect(() => {
    fetchSingleVHS();
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
          <VhsThumbnail vhsTitle={vhsInfo.title} image={vhsInfo.thumbnail} />

          <Link to="/vhs/edit" state={vhsInfo}>
            <button>EDIT</button>
          </Link>
        </div>
      )}
    </div>
  );
};
