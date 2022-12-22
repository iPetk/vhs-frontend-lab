import { useEffect, useState } from 'react';
import axios from 'axios';
import { VHS } from '../types';
import { VhsThumbnail } from '../components/VHSThumbnail';
import { SearchBar } from '../components/SearchBar';
// @ts-ignore
import placeholder from '../assets/placeholder.svg';
import { SearchFormInput } from '../components/searchBarConfig';

export const Explore = () => {
  const [vhsList, setVhsList] = useState<VHS[]>([]);
  const [query, setQuery] = useState<SearchFormInput>({ queryType: 'title', queryValue: '' });

  useEffect(() => {
    getVhsList(query);
  }, [query]);

  const getVhsList = async (query: SearchFormInput) => {
    try {
      const response = await axios.get(`/api/vhs`, {
        params: { [query.queryType]: query.queryValue || undefined },
      });
      setVhsList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit: (data: SearchFormInput) => void = (data) => {
    setQuery({ queryType: data.queryType, queryValue: data.queryValue });
  };

  return (
    <div>
      <SearchBar setQuery={setQuery} onSubmit={onSubmit} />

      {vhsList.map(
        (item) =>
          item.id && (
            <VhsThumbnail
              key={item.id}
              image={item.thumbnail || placeholder}
              vhsId={item.id}
              vhsTitle={item.title}
            />
          )
      )}
    </div>
  );
};
