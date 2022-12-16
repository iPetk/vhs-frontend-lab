import axios from "axios";
import { useNavigate } from "react-router-dom";
import { VhsForm } from "../components/VhsForm";

export const CreateNew = () => {
  const exploreLink = useNavigate();

  const createNewEntry = async (data: FormData) => {
    try {
      const response = await axios.post("/api/vhs", data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const submitForm = (data: FormData) => {
    console.log(data);
    createNewEntry(data);
    exploreLink("/explore");
  };

  return (
    <>
      <h1>CreateNew</h1>
      <VhsForm onSubmit={submitForm} />
    </>
  );
};
