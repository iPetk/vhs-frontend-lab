import { useEffect, useState } from 'react';
import axios from 'axios';
import { VHS } from '@types';
import { SearchBar } from '@components';

import { SearchFormInput } from '@components';
import { VhsCard } from '@components';
import { Link } from 'react-router-dom';

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
            <Link to={`${item.id}`} key={item.id}>
              <VhsCard key={item.id} image={item.thumbnail} vhsId={item.id} vhsTitle={item.title} />
            </Link>
          )
      )}
    </div>
  );
};
