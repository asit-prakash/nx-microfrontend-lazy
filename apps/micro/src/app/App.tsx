import { lazy, Suspense } from 'react';
// import LazyComp from './LazyComp';

const LazyComp = lazy(() => import('./LazyComp'));

const App = () => {
  return (
    <div>
      Micro App
      <Suspense fallback="Loading">
        <LazyComp />
      </Suspense>
    </div>
  );
};

export default App;
