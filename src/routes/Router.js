import React from 'react';
import { BrowserRouter as AppRouter, Route, Routes } from 'react-router-dom'; // Alias 'BrowserRouter' as 'AppRouter'
import Loadable from '../layouts/Loadable'; // Custom Loadable component

// Lazy load components using Loadable and React.lazy
const Home = Loadable(React.lazy(() => import('../pages/Home'))); // Corrected path
const About = Loadable(React.lazy(() => import('../pages/AboutUs')));
const Contact = Loadable(React.lazy(() => import('../pages/ContactUsPage')));
const NotFound = Loadable(React.lazy(() => import('../pages/NotFound')));

const Router = () => {
  return (
    <AppRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppRouter>
  );
};

export default Router;
