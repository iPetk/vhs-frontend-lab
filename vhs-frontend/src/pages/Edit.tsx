import axios from "axios";
import { useState } from "react";
import { VhsForm } from "../components/VhsForm";
import { useLocation, useNavigate, redirect } from "react-router-dom";
import { Popup } from "../components/DeletePopup";

export const Edit = () => {
  const VHS = useLocation().state;

  const [open, setOpen] = useState(false);
  const exploreLink = useNavigate();

  const editEntry = async (data: FormData) => {
    try {
      const response = await axios.patch(`/api/vhs/${VHS.id}`, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEntry = async () => {
    try {
      const response = await axios.delete(`/api/vhs/${VHS.id}`);
      console.log(response);
      exploreLink("/explore");
    } catch (error) {
      console.error(error);
      exploreLink("/explore");
    }
  };

  const handleSubmit = (data: any) => {
    console.log(data);
    editEntry(data);
    redirect(`/${VHS.id}`);
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
