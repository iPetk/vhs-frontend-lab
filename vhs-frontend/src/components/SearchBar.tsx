import { useForm } from 'react-hook-form';
import { SearchFormInput, searchBarDefaultValues } from './searchBarConfig';

interface Props {
  setQuery: (value: string) => void;
  onSubmit: (data: SearchFormInput) => void;
}

export const SearchBar = ({ setQuery, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchFormInput>({
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
          {...register('queryText', { required: true })}
          type="search"
          placeholder={'Start typing to search'}
        />

        <button type="submit">Search</button>
        <button
          type="reset"
          onClick={() => {
            reset({ queryText: '' });
            setQuery('');
          }}
        >
          Reset
        </button>
        {errors.queryText && <span>You must type something</span>}
      </form>
    </div>
  );
};
