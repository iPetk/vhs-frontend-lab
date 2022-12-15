import axios from "axios";
import { VhsFormType } from "../types";
import { useNavigate } from "react-router-dom";
import { VhsForm } from "../components/VhsForm";

export default function CreateNew() {
  const exploreLink = useNavigate();

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  const createNewEntry = async (data: FormData) => {
    try {
      const response = await axios.post("/api/vhs", data, config);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
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

  const submitForm = (data: any) => {
    console.log(data);
    const formData = createData(data);
    createNewEntry(formData);
    exploreLink("/explore");
  };

  return (
    <>
      <h1>CreateNew</h1>
      <VhsForm onSubmit={submitForm} />
    </>
  );
}
