import { FormEvent, useState } from 'react';

interface Props {
  setQuery: (value: string) => void;
}
export const SearchBar = ({ setQuery }: Props) => {
  const [inputVal, setInputVal] = useState('');
  const [queryType, setQueryType] = useState('title');

  const changeType = (e: any) => {
    setQueryType(e.target.value);
  };

  const changeText = (e: any) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const query = `?${queryType}=${inputVal}`;
    setQuery(query);
  };

  const reset = () => {
    setInputVal('');
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select onChange={changeType}>
          <option value="title">Title</option>
          <option value="description">Description</option>
          <option value="genre">Genre</option>
        </select>
        <input
          type="search"
          placeholder={'Start typing to search'}
          onChange={changeText}
          value={inputVal}
        ></input>
        <button type="submit" disabled={!inputVal}>
          Search
        </button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
};
