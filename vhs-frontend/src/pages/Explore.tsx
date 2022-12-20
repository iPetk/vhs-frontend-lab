import { useEffect, useState } from 'react';
import axios from 'axios';
import { VHS } from '../types';
import { VhsThumbnail } from '../components/VHSThumbnail';
import { SearchBar } from '../components/SearchBar';
// @ts-ignore
import placeholder from '../assets/placeholder.jpg';
import { SearchFormInput } from '../components/searchBarConfig';

export const Explore = () => {
  const [vhsList, setVhsList] = useState<VHS[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getVhsList(query);
  }, [query]);

  const getVhsList = async (query?: string) => {
    try {
      const response = await axios.get(`/api/vhs${query}`);
      setVhsList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit: (data: SearchFormInput) => void = (data) => {
    const query = `?${data.queryType}=${data.queryText}`;
    setQuery(query);
  };

  return (
    <div>
      <SearchBar setQuery={setQuery} onSubmit={onSubmit} />

      {vhsList.map(
        (item) =>
          item.id && (
            <VhsThumbnail
              key={item.id}
              image={item.thumbnail ? item.thumbnail.replace(/\\/g, '/') : placeholder}
              vhsId={item.id}
              vhsTitle={item.title}
            />
          )
      )}
    </div>
  );
};
