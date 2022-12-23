import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { VhsForm, Popup, createData } from '@components';
import { VhsFormType } from '@types';

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
      <h1>Edit</h1>
      {
        <div>
          {open ? (
            <Popup
              text="Are you sure you want to delete? This action is irreversible"
              closePopup={() => setOpen(false)}
              doPopupAction={() => {
                deleteEntry();
                setOpen(false);
              }}
            />
          ) : null}
        </div>
      }

      <button onClick={() => setOpen(true)}>Delete</button>

      <VhsForm onSubmit={handleSubmit} values={VHS} />
    </>
  );
};
