import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { profile } from '../../data/profile';
import { scrollToSection } from '../../hooks/useActiveSection';

function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: { xs: '70vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #FAF8F5 0%, #F3EDE6 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ maxWidth: 720 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 2 }}
          >
            {profile.title}
          </Typography>
          <Typography variant="h1" component="h1">
            Hi, I&apos;m {profile.name.split(' ')[0]}.
          </Typography>
          <Typography variant="h3" component="p" color="text.secondary" sx={{ fontWeight: 400 }}>
            {profile.tagline}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<DownloadIcon />}
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
            <Button
              variant="text"
              color="primary"
              size="large"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default HeroSection;
