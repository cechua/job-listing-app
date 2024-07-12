import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import JobsPage from './components/page/JobsPage';
import ApplicationsPage from './components/page/ApplicationsPage';
import { Header } from './components/header/Header';
import JobDetails from './components/jobDetails/JobDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="jobs" element={<JobsPage />} />
        <Route path="jobs/details" element={<JobDetails />} />
        <Route path="applications" element={<ApplicationsPage />} />
        <Route path="*" element={<Navigate to="/jobs" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
