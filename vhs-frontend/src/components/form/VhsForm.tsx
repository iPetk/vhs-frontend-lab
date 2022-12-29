import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { VHS, vhsFormSchema, VhsFormType } from '@types';

import { buildDefaultValues } from './defaultValuesConfig';
import { t } from 'i18next';

type Props = {
  values?: VHS;
  onSubmit: (data: VhsFormType) => void;
};

export const VhsForm = ({ values, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VhsFormType>({
    resolver: zodResolver(vhsFormSchema),
    defaultValues: buildDefaultValues(values),
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{t('form.fields.title')}</p>
        <input {...register('title')} />
        {errors.title && <span>{errors.title.message}</span>}

        <p>{t('form.fields.description')}</p>
        <input {...register('description')} />
        {errors.description && <span>{errors.description.message}</span>}

        <p>{t('form.fields.genre')}</p>
        <input {...register('genre')} />
        {errors.genre && <span>{errors.genre.message}</span>}

        <p>{t('form.fields.duration')}</p>
        <input type="number" {...register('duration', { valueAsNumber: true })} />
        {errors.duration && <span>{errors.duration.message}</span>}

        <p>{t('form.fields.release')}</p>
        <input type="number" {...register('releasedAt', { valueAsNumber: true })} />
        {errors.releasedAt && <span>{errors.releasedAt.message}</span>}

        <p>{t('form.fields.rental price')}</p>
        <input type="number" {...register('rentalPrice', { valueAsNumber: true })} />
        {errors.rentalPrice && <span>{errors.rentalPrice.message}</span>}

        <p>{t('form.fields.rental duration')}</p>
        <input type="number" {...register('rentalDuration', { valueAsNumber: true })} />
        {errors.rentalDuration && <span>{errors.rentalDuration.message}</span>}

        <p>{t('form.fields.thumbnail')}</p>
        <input type="file" {...register('thumbnail')} />
        {errors.thumbnail && <span>{errors.thumbnail.message}</span>}

        <button value="Submit">{t('form.fields.submit')}</button>
      </form>
    </div>
  );
};
