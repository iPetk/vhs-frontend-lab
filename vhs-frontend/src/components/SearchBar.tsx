import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
          <option value="title">Title</option>
          <option value="description">Description</option>
          <option value="genre">Genre</option>
        </select>
        <input
          {...register('queryValue', { required: true })}
          type="search"
          placeholder={'Start typing to search'}
        />

        <button>Search</button>
        <button
          type="reset"
          onClick={() => {
            reset({ queryValue: '' });
            setQuery({ queryType: 'title', queryValue: '' });
          }}
        >
          Reset
        </button>
        {errors.queryValue && <span>{errors.queryValue.message}</span>}
      </form>
    </div>
  );
};
