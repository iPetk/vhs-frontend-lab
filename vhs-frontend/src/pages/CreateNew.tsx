import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { VhsForm, createData } from '@components';
import { VhsFormType } from '@types';

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
      <h1>CreateNew</h1>
      <VhsForm onSubmit={submitForm} />
    </>
  );
};
