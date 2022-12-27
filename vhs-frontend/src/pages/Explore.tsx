import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar, SearchFormInput, VhsCard } from '@components';
import { VHS } from '@types';
import axios from 'axios';

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
            <Link key={item.id} to={`${item.id}`}>
              <VhsCard image={item.thumbnail} vhsTitle={item.title} />
            </Link>
          )
      )}
    </div>
  );
};
