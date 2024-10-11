import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Only import Route and Routes
import Loadable from '../layouts/Loadable'; // Custom Loadable component

const Home = Loadable(React.lazy(() => import('../pages/Home')));
const Category = Loadable(React.lazy(() => import('../pages/Categories')));
const About = Loadable(React.lazy(() => import('../pages/AboutUs')));
const Contact = Loadable(React.lazy(() => import('../pages/ContactUsPage')));
const PrivacyPolicy = Loadable(React.lazy(() => import('../pages/PrivacyPolicy')));
const TermsConditions = Loadable(React.lazy(() => import('../pages/TermsConditions')));
const NotFound = Loadable(React.lazy(() => import('../pages/NotFound')));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
