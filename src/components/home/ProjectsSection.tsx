import Box from '@mui/material/Box';
import { getFeaturedProjects } from '../../data/projects';
import ProjectCard from '../projects/ProjectCard';
import Section from '../layout/Section';

function ProjectsSection() {
  const featured = getFeaturedProjects();

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work that highlights how I approach problems and ship solutions."
      background="paper"
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Box>
    </Section>
  );
}

export default ProjectsSection;
