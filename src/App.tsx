import { Suspense } from 'react';
import Router from '@/router';

import { CategoryProvider } from '@/context/CategoryContext';

const App = () => (
  <Suspense>
    <CategoryProvider>
      <Router />
    </CategoryProvider>
  </Suspense>
);

export default App;
