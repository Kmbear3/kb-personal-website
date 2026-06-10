import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { profile } from '../../data/profile';
import profilePhoto from '../../assets/profile.jpg';
import Section from '../layout/Section';

function AboutSection() {
  return (
    <Section id="about" title="About Me">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 4, md: 6 }}
        alignItems={{ xs: 'center', md: 'flex-start' }}
      >
        <Box
          component="img"
          src={profilePhoto}
          alt={`${profile.name} profile photo`}
          sx={{
            width: { xs: 200, md: 280 },
            height: { xs: 200, md: 280 },
            borderRadius: 3,
            objectFit: 'cover',
            boxShadow: '0 8px 32px rgba(45, 42, 38, 0.12)',
            flexShrink: 0,
          }}
        />
        <Stack spacing={2}>
          <Typography variant="body1">{profile.bioLong}</Typography>
          <Typography variant="body1" color="text.secondary">
            {profile.personalDetail}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profile.location}
          </Typography>
        </Stack>
      </Stack>
    </Section>
  );
}

export default AboutSection;
