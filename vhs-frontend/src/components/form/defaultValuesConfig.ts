import { VHS } from "../../types";

export const buildDefaultValues = (values?: VHS) => {
  const defaultValues = {
    title: values?.title || "",
    description: values?.description || "",
    genre: values?.genre || "",
    duration: values?.duration || 0,
    releasedAt: values?.releasedAt || 0,
    rentalPrice: values?.rentalPrice || 0,
    rentalDuration: values?.rentalDuration || 0,
  };

  return defaultValues;
};
