import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

function NotFound() {
  return (
    <>
      <Seo title="Page Not Found — Kassidy Barram" description="The page you're looking for doesn't exist." />
      <Container maxWidth="sm">
        <Box sx={{ py: { xs: 10, md: 16 }, textAlign: 'center' }}>
          <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', color: 'primary.main' }}>
            404
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Page not found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            startIcon={<HomeIcon />}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default NotFound;
