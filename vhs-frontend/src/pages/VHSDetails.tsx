import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { VhsThumbnail } from '@components';
import { VHS } from '@types';
import { convertDuration } from '@utils';
import axios from 'axios';
import { t } from 'i18next';

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
          <div>
            {t('VHS.description')}: {vhsInfo.description}
          </div>
          <div>
            {t('VHS.duration')}: {convertDuration(vhsInfo.duration)}
          </div>
          <div>
            {t('VHS.genre')}: {vhsInfo.genre}
          </div>
          <div>
            {t('VHS.release')}: {vhsInfo.releasedAt}
          </div>
          <div>
            {t('VHS.rental price')}: {vhsInfo.rentalPrice} coins
          </div>
          <VhsThumbnail vhsTitle={vhsInfo.title} image={vhsInfo.thumbnail} />

          <Link to="/vhs/edit" state={vhsInfo}>
            <button>{t('form.edit')}</button>
          </Link>
        </div>
      )}
    </div>
  );
};
