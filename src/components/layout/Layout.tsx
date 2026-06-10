import Box from '@mui/material/Box';
import type { ReactNode } from 'react';
import { NAV_HEIGHT } from '../../constants/layout';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Box
        component="main"
        id="main-content"
        sx={{
          flexGrow: 1,
          pt: `${NAV_HEIGHT}px`,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
