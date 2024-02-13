import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { VhsThumbnail } from '@components';
import { VHS } from '@types';
import { convertDuration } from '@utils';
import axios from 'axios';

import './vhsDetails.css';

export const VHSDetails = () => {
  const { t } = useTranslation();
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
          <div className="details-container">
            <VhsThumbnail vhsTitle={vhsInfo.title} image={vhsInfo.thumbnail} />
            <div className="details-info">
              <p>
                {t('VHS.description')}: {vhsInfo.description}
              </p>
              <p>
                {t('VHS.duration')}: {convertDuration(vhsInfo.duration)}
              </p>
              <p>
                {t('VHS.genre')}: {vhsInfo.genre}
              </p>
              <p>
                {t('VHS.release')}: {vhsInfo.releasedAt}
              </p>
              <p>
                {t('VHS.rentalPrice')}: {vhsInfo.rentalPrice} coins
              </p>
              <Link to="/vhs/edit" state={vhsInfo}>
                <button>{t('form.edit')}</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
