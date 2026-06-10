import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Home from './pages/Home';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 16 }}>
      <CircularProgress color="primary" />
    </Box>
  );
}

function RouteCollection() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default RouteCollection;
