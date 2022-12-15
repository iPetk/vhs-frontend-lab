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

  const createData = (d: VhsFormType) => {
    const data = new FormData();
    data.append("title", d.title);
    data.append("description", d.description);
    data.append("genre", d.genre);
    data.append("duration", d.duration.toString());
    data.append("releasedAt", d.releasedAt.toString());
    data.append("rentalPrice", d.rentalPrice.toString());
    data.append("rentalDuration", d.rentalDuration.toString());
    if (d.thumbnail) {
      data.append("thumbnail", d.thumbnail[0]);
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
