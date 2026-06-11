import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  background?: 'default' | 'paper';
}

function Section({ id, title, subtitle, children, background = 'default' }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: background === 'paper' ? 'background.paper' : 'background.default',
      }}
    >
      <Container maxWidth="lg">
        {title && (
          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            <Typography variant="h2" component="h2" gutterBottom>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
                {subtitle}
              </Typography>
            )}
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
}

export default Section;
