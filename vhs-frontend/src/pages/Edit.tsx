import axios from "axios";
import React, { useState } from "react";
import { VhsFormType } from "../types";
import { VhsForm } from "../components/VhsForm";
import { useLocation, useNavigate } from "react-router-dom";
import { Popup } from "../components/DeletePopup";

export default function Edit() {
  const VHS = useLocation().state;

  const [open, setOpen] = useState(false);
  const exploreLink = useNavigate();

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  const createData = (formData: VhsFormType) => {
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("genre", formData.genre);
    data.append("duration", formData.duration.toString());
    data.append("releasedAt", formData.releasedAt.toString());
    data.append("rentalPrice", formData.rentalPrice.toString());
    data.append("rentalDuration", formData.rentalDuration.toString());
    if (formData.thumbnail) {
      data.append("thumbnail", formData.thumbnail[0]);
    }
    return data;
  };

  const editEntry = async (data: FormData) => {
    try {
      const response = await axios.patch(`/api/vhs/${VHS.id}`, data, config);
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
    const formData = createData(data);
    editEntry(formData);
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
}
