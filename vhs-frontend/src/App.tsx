import { Routes, Route } from 'react-router-dom';
import { Header } from '@components';
import { Home } from '@pages';
import { Explore } from '@pages';
import { VHSDetails } from '@pages';
import { Edit } from '@pages';
import { CreateNew } from '@pages';
import { NotFound } from '@pages';

import './App.css';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="vhs">
            <Route index element={<Explore />} />
            <Route path=":vhsId" element={<VHSDetails />} />
            <Route path="edit" element={<Edit />} />
            <Route path="create" element={<CreateNew />} />
          </Route>

          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};
