import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createData, Popup, VhsForm } from '@components';
import { VhsFormType } from '@types';
import axios from 'axios';
import { t } from 'i18next';

export const Edit = () => {
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
    console.log(data);
    editEntry(createData(data));
  };

  return (
    <>
      <h1>{t('form.edit')}</h1>
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

      <button onClick={() => setOpen(true)}>{t('popups.delete.button')}</button>

      <VhsForm onSubmit={handleSubmit} values={VHS} />
    </>
  );
};
