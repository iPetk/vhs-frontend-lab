import { Route, Routes } from 'react-router-dom';
import { Header } from '@components';
import { CreateNew, Edit, Explore, Home, NotFound, VHSDetails } from '@pages';

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
