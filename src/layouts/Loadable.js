import React, { Suspense } from 'react';

const Loadable = (Component, LoadingFallback = () => <div>Loading...</div>) => {
  return (props) => (
    <Suspense fallback={<LoadingFallback />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
