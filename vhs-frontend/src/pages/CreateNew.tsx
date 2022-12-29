import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { createData, VhsForm } from '@components';
import { VhsFormType } from '@types';
import axios from 'axios';

export const CreateNew = () => {
  const { t } = useTranslation();
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
    navigate('/vhs');
  };

  return (
    <>
      <h1>{t('form.createNewTitle')}</h1>
      <VhsForm onSubmit={submitForm} />
    </>
  );
};
