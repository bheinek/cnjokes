import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { Category } from './pages/Category';
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/NotFoundPage';

export function Routes() {
  return (
    <RouterRoutes>
      <Route index element={<Home />} />
      <Route path="/category/:slug" element={<Category />} />
      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  );
}
