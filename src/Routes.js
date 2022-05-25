import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { Category } from './pages/Category';
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/NotFoundPage';
import { Search } from './pages/Search';

export function Routes() {
  return (
    <RouterRoutes>
      <Route index element={<Home />} />
      <Route path="/category/:slug" element={<Category />} />
      <Route path="/search/:slug" element={<Search />} />
      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  );
}
