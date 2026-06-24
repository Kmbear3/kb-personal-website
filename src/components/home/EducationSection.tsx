import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { education } from '../../data/education';
import Section from '../layout/Section';

function EducationSection() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic background and research recognition."
      background="paper"
    >
      <Stack spacing={0} sx={{ position: 'relative' }}>
        {education.map((entry, index) => (
          <Box
            key={entry.id}
            sx={{
              display: 'flex',
              gap: 3,
              pb: index < education.length - 1 ? 5 : 0,
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
              {index < education.length - 1 && (
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
                    {entry.degree}
                  </Typography>
                  <Typography variant="subtitle1" color="primary.main" fontWeight={600}>
                    {entry.institution}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
                  {entry.startDate} — {entry.endDate}
                </Typography>
              </Stack>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {entry.location}
              </Typography>

              <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                {entry.bullets.map((bullet) => (
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
            </Box>
          </Box>
        ))}
      </Stack>
    </Section>
  );
}

export default EducationSection;
