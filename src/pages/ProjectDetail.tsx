import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import Seo from '../components/Seo';
import NotFound from './NotFound';

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <Seo
        title={`${project.title} — Kassidy Barram`}
        description={project.summary}
      />
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Button
          component={Link}
          to="/#projects"
          startIcon={<ArrowBackIcon />}
          color="primary"
          sx={{ mb: 4 }}
        >
          Back to Projects
        </Button>

        <Typography variant="overline" color="primary.main" fontWeight={600}>
          Case Study
        </Typography>
        <Typography variant="h2" component="h1" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.125rem' }}>
          {project.summary}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 6 }}>
          {project.liveUrl && (
            <Button
              variant="contained"
              color="primary"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<OpenInNewIcon />}
            >
              View Live
            </Button>
          )}
          {project.repoUrl && (
            <Button
              variant="outlined"
              color="primary"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
            >
              View Code
            </Button>
          )}
        </Stack>

        <Stack spacing={4}>
          <Box>
            <Typography variant="h4" component="h2" gutterBottom>
              Problem
            </Typography>
            <Typography variant="body1">{project.problem}</Typography>
          </Box>

          <Box>
            <Typography variant="h4" component="h2" gutterBottom>
              Approach
            </Typography>
            <Typography variant="body1">{project.approach}</Typography>
          </Box>

          <Box>
            <Typography variant="h4" component="h2" gutterBottom>
              Outcome
            </Typography>
            <Typography variant="body1">{project.outcome}</Typography>
          </Box>

          <Box>
            <Typography variant="h4" component="h2" gutterBottom>
              Highlights
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
              {project.highlights.map((highlight) => (
                <Typography key={highlight} component="li" variant="body1" sx={{ mb: 1 }}>
                  {highlight}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="h4" component="h2" gutterBottom>
              Tech Stack
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {project.tech.map((t) => (
                <Chip key={t} label={t} variant="outlined" />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default ProjectDetail;
