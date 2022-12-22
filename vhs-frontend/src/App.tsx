import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { VHSDetails } from './pages/VHSDetails';
import { Edit } from './pages/Edit';
import { CreateNew } from './pages/CreateNew';
import { NotFound } from './pages/NotFound';

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
