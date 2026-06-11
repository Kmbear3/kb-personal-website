import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { profile } from '../../data/profile';
import Section from '../layout/Section';

function ContactSection() {
  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="I'm open to new opportunities, collaborations, and conversations about software."
    >
      <Box
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 3,
          backgroundColor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          textAlign: 'center',
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        <Typography variant="body1" sx={{ mb: 4 }}>
          The best way to reach me is by email. I typically respond within a couple of days.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<EmailIcon />}
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            startIcon={<LinkedInIcon />}
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            startIcon={<GitHubIcon />}
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </Stack>
      </Box>
    </Section>
  );
}

export default ContactSection;
