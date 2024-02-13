import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

import { searchBarDefaultValues, SearchFormInput, searchFormSchema } from '../searchBarConfig';

import './searchBar.css';

interface Props {
  setQuery: Dispatch<SetStateAction<SearchFormInput>>;
  onSubmit: (data: SearchFormInput) => void;
}

export const SearchBar = ({ setQuery, onSubmit }: Props) => {
  const { t } = useTranslation();

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
    <div className="searchbar-container">
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

        <button className="searchbar-search">{t('searchbar.search')}</button>
        <button
          className="searchbar-reset"
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
