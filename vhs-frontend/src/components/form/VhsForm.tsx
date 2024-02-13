import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { VHS, vhsFormSchema, VhsFormType } from '@types';

import { buildDefaultValues } from './defaultValuesConfig';

import './vhsForm.css';

type Props = {
  values?: VHS;
  onSubmit: (data: VhsFormType) => void;
};

export const VhsForm = ({ values, onSubmit }: Props) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VhsFormType>({
    resolver: zodResolver(vhsFormSchema),
    defaultValues: buildDefaultValues(values),
  });

  return (
    <div className="vhs_form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="vhs_form">
        <div>
          <p>{t('form.fields.title')}</p>
          <input {...register('title')} />
          {errors.title && <p className="vhs_form-errors">{errors.title.message}</p>}
        </div>

        <div>
          <p>{t('form.fields.description')}</p>
          <textarea {...register('description')} rows={3} />
          {errors.description && <p className="vhs_form-errors">{errors.description.message}</p>}
        </div>

        <div>
          <p>{t('form.fields.genre')}</p>
          <input {...register('genre')} />
          {errors.genre && <p className="vhs_form-errors">{errors.genre.message}</p>}
        </div>

        <div>
          <p>{t('form.fields.duration')}</p>
          <input type="number" {...register('duration', { valueAsNumber: true })} />
          {errors.duration && <p className="vhs_form-errors">{errors.duration.message}</p>}
        </div>

        <div>
          <p>{t('form.fields.release')}</p>
          <input type="number" {...register('releasedAt', { valueAsNumber: true })} />
          {errors.releasedAt && <p className="vhs_form-errors">{errors.releasedAt.message}</p>}
        </div>

        <div>
          <p>{t('form.fields.rentalPrice')}</p>
          <input type="number" {...register('rentalPrice', { valueAsNumber: true })} />
          {errors.rentalPrice && <p className="vhs_form-errors">{errors.rentalPrice.message}</p>}
        </div>

        <div>
          <p>{t('form.fields.rentalDuration')}</p>
          <input type="number" {...register('rentalDuration', { valueAsNumber: true })} />
          {errors.rentalDuration && (
            <p className="vhs_form-errors">{errors.rentalDuration.message}</p>
          )}
        </div>

        <div>
          <p>{t('form.fields.thumbnail')}</p>
          <input type="file" {...register('thumbnail')} />
          {errors.thumbnail && <p className="vhs_form-errors">{errors.thumbnail.message}</p>}
        </div>

        <button>{t('form.fields.submit')}</button>
      </form>
    </div>
  );
};
