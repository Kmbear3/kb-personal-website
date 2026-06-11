import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import theme from './theme/theme';
import Layout from './components/layout/Layout';
import ResponsiveAppBar from './components/nav/ResponsiveAppBar';
import RouteCollection from './RouteCollection';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <ResponsiveAppBar />
      <Layout>
        <RouteCollection />
      </Layout>
    </BrowserRouter>
  </ThemeProvider>,
);
