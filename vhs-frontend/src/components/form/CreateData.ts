import { VhsFormType } from '@types';

export const createData = (formData: VhsFormType) => {
  const data = new FormData();
  data.append('title', formData.title);
  data.append('description', formData.description);
  data.append('genre', formData.genre);
  data.append('duration', formData.duration.toString());
  data.append('releasedAt', formData.releasedAt.toString());
  data.append('rentalPrice', formData.rentalPrice.toString());
  data.append('rentalDuration', formData.rentalDuration.toString());
  if (formData.thumbnail) {
    data.append('thumbnail', formData.thumbnail[0]);
  }
  return data;
};
