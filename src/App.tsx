import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import WorkshopsPage from './pages/WorkshopsPage';
import WorkshopDetailPage from './pages/WorkshopDetailPage';
import WorkshopEnrollmentPage from './pages/WorkshopEnrollmentPage';
import FAQPage from './pages/FAQPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/workshops" element={<WorkshopsPage />} />
      <Route path="/workshop/:slug" element={<WorkshopDetailPage />} />
      <Route path="/enrollment" element={<WorkshopEnrollmentPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  );
}

export default App;