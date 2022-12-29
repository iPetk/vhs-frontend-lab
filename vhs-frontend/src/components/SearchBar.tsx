import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { t } from 'i18next';

import { searchBarDefaultValues, SearchFormInput, searchFormSchema } from './searchBarConfig';

interface Props {
  setQuery: Dispatch<SetStateAction<SearchFormInput>>;
  onSubmit: (data: SearchFormInput) => void;
}

export const SearchBar = ({ setQuery, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: searchBarDefaultValues,
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register('queryType')}>
          <option value="title">{t('VHS.title')}</option>
          <option value="description">{t('VHS.description')}</option>
          <option value="genre">{t('VHS.genre')}</option>
        </select>
        <input
          {...register('queryValue', { required: true })}
          type="search"
          placeholder={`${t('searchbar.placeholder')}`}
        />

        <button>{t('searchbar.search')}</button>
        <button
          type="reset"
          onClick={() => {
            reset({ queryValue: '' });
            setQuery({ queryType: 'title', queryValue: '' });
          }}
        >
          {t('searchbar.reset')}
        </button>
        {errors.queryValue && <span>{errors.queryValue.message}</span>}
      </form>
    </div>
  );
};
