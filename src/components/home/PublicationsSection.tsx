import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { publications } from '../../data/publications';
import { profile } from '../../data/profile';
import Section from '../layout/Section';

function formatAuthors(authors: string[]) {
  return authors
    .map((author) =>
      author === profile.name ? (
        <Box component="span" key={author} sx={{ fontWeight: 600 }}>
          {author}
        </Box>
      ) : (
        author
      ),
    )
    .reduce<(string | ReactNode)[]>((acc, author, index) => {
      if (index > 0) acc.push(', ');
      acc.push(author);
      return acc;
    }, []);
}

function PublicationsSection() {
  return (
    <Section
      id="publications"
      title="Publications"
      subtitle="Peer-reviewed research in distributed systems, big data, and spatiotemporal analytics."
      background="paper"
    >
      <Stack spacing={3}>
        {publications.map((pub) => (
          <Box
            key={pub.id}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'background.default',
            }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', sm: 'flex-start' }}
              spacing={1}
              sx={{ mb: 1.5 }}
            >
              <Typography variant="h5" component="h3" sx={{ flex: 1, pr: { sm: 2 } }}>
                {pub.url ? (
                  <Link
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    underline="hover"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'flex-start',
                      gap: 0.5,
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {pub.title}
                    <OpenInNewIcon sx={{ fontSize: 18, mt: 0.4, flexShrink: 0 }} />
                  </Link>
                ) : (
                  pub.title
                )}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexShrink: 0 }}>
                <Chip label={pub.year} size="small" color="primary" variant="outlined" />
                {pub.award && (
                  <Chip label={pub.award} size="small" color="secondary" variant="filled" />
                )}
              </Stack>
            </Stack>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {formatAuthors(pub.authors)}
            </Typography>

            <Typography variant="body2" color="text.secondary" fontStyle="italic">
              {pub.venue}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Section>
  );
}

export default PublicationsSection;
