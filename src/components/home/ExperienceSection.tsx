import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { experiences } from '../../data/experience';
import Section from '../layout/Section';

function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Roles where I've built, shipped, and learned."
    >
      <Stack spacing={0} sx={{ position: 'relative' }}>
        {experiences.map((exp, index) => (
          <Box
            key={exp.id}
            sx={{
              display: 'flex',
              gap: 3,
              pb: index < experiences.length - 1 ? 5 : 0,
              position: 'relative',
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                alignItems: 'center',
                width: 24,
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  mt: 0.75,
                }}
              />
              {index < experiences.length - 1 && (
                <Box
                  sx={{
                    width: 2,
                    flexGrow: 1,
                    backgroundColor: 'divider',
                    mt: 1,
                  }}
                />
              )}
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems={{ xs: 'flex-start', sm: 'baseline' }}
                spacing={1}
                sx={{ mb: 1 }}
              >
                <Box>
                  <Typography variant="h5" component="h3">
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" color="primary.main" fontWeight={600}>
                    {exp.company}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
                  {exp.startDate} — {exp.endDate}
                </Typography>
              </Stack>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {exp.location}
              </Typography>

              <Box component="ul" sx={{ m: 0, pl: 2.5, mb: 2 }}>
                {exp.bullets.map((bullet) => (
                  <Typography
                    key={bullet}
                    component="li"
                    variant="body1"
                    sx={{ mb: 1, color: 'text.primary' }}
                  >
                    {bullet}
                  </Typography>
                ))}
              </Box>

              <Stack direction="row" flexWrap="wrap" gap={0.75}>
                {exp.tech.map((t) => (
                  <Chip key={t} label={t} size="small" variant="outlined" />
                ))}
              </Stack>
            </Box>
          </Box>
        ))}
      </Stack>
    </Section>
  );
}

export default ExperienceSection;
