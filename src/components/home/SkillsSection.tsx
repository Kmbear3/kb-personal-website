import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { skillGroups } from '../../data/skills';
import Section from '../layout/Section';

function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies and practices I work with regularly."
      background="paper"
    >
      <Stack spacing={4}>
        {skillGroups.map((group) => (
          <Box key={group.category}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'primary.main' }}>
              {group.category}
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {group.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  sx={{
                    borderColor: 'divider',
                    '&:hover': {
                      borderColor: 'primary.light',
                      backgroundColor: 'rgba(196, 112, 75, 0.06)',
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Section>
  );
}

export default SkillsSection;
