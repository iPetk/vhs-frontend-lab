import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { createData, Popup, VhsForm } from '@components';
import { VhsFormType } from '@types';
import axios from 'axios';

import './edit.css';

export const Edit = () => {
  const { t } = useTranslation();
  const VHS = useLocation().state;

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const editEntry = async (data: FormData) => {
    try {
      const response = await axios.patch(`/api/vhs/${VHS.id}`, data);
      console.log(response);
      navigate(`/vhs/${VHS.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEntry = async () => {
    try {
      const response = await axios.delete(`/api/vhs/${VHS.id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      navigate('/vhs');
    }
  };

  const handleSubmit = (data: VhsFormType) => {
    editEntry(createData(data));
  };

  return (
    <div className="edit-page-layout">
      <h1>{t('form.edit')}</h1>
      <button className="delete-entry" onClick={() => setOpen(true)}>
        {t('popups.delete.button')}
      </button>
      {
        <div>
          {open ? (
            <Popup
              text={`${t('popups.delete.text')}`}
              popupButtonText={`${t('popups.delete.button')}`}
              closePopup={() => setOpen(false)}
              doPopupAction={() => {
                deleteEntry();
                setOpen(false);
              }}
            />
          ) : null}
        </div>
      }

      <VhsForm onSubmit={handleSubmit} values={VHS} />
    </div>
  );
};
