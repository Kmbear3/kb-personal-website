import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'box-shadow 0.2s, transform 0.2s',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(45, 42, 38, 0.1)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {project.summary}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={0.75}>
          {project.tech.slice(0, 4).map((t) => (
            <Chip key={t} label={t} size="small" variant="outlined" />
          ))}
          {project.tech.length > 4 && (
            <Chip label={`+${project.tech.length - 4}`} size="small" variant="outlined" />
          )}
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
        <Button
          component={Link}
          to={`/projects/${project.slug}`}
          endIcon={<ArrowForwardIcon />}
          color="primary"
        >
          Case Study
        </Button>
        {project.repoUrl && (
          <Button
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
            size="small"
          >
            Code
          </Button>
        )}
        {project.liveUrl && (
          <Button
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<OpenInNewIcon />}
            size="small"
          >
            Live
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
