import { useNavigate } from 'react-router-dom';
import { createData, VhsForm } from '@components';
import { VhsFormType } from '@types';
import axios from 'axios';
import { t } from 'i18next';

export const CreateNew = () => {
  const navigate = useNavigate();

  const createNewEntry = async (data: FormData) => {
    try {
      const response = await axios.post('/api/vhs', data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const submitForm = (data: VhsFormType) => {
    console.log(data);
    createNewEntry(createData(data));
    navigate('/explore');
  };

  return (
    <>
      <h1>{t('form.create new title')}</h1>
      <VhsForm onSubmit={submitForm} />
    </>
  );
};
