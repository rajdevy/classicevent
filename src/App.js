import React from 'react';
import { BrowserRouter as AppRouter } from 'react-router-dom'; // Import BrowserRouter here
import Router from './Routes/Router'; // Ensure this path is correct
import Navbar from './layouts/navbar';

const App = () => {
  return (
    <AppRouter>  {/* Move the router provider here */}
      <Navbar />
      <Router />
    </AppRouter>
  );
};

export default App;
