import { useState, type KeyboardEvent, type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

function PublicationCard({
  pub,
  expanded,
  onToggle,
}: {
  pub: (typeof publications)[number];
  expanded: boolean;
  onToggle: () => void;
}) {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle();
    }
  };

  return (
    <Box
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: expanded ? 'primary.light' : 'divider',
        backgroundColor: 'background.default',
        transition: 'border-color 0.2s',
      }}
    >
      <Box
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        aria-controls={`${pub.id}-abstract`}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        sx={{
          p: { xs: 3, md: 4 },
          cursor: 'pointer',
          '&:hover': { backgroundColor: 'rgba(196, 112, 75, 0.04)' },
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: -2,
          },
        }}
      >
        <Stack direction="row" spacing={1} alignItems="flex-start">
          <Box sx={{ flexGrow: 1 }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', sm: 'flex-start' }}
              spacing={1}
              sx={{ mb: 1.5 }}
            >
              <Typography variant="h5" component="h3" sx={{ flex: 1, pr: { sm: 2 } }}>
                {pub.title}
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

          <ExpandMoreIcon
            aria-hidden
            sx={{
              mt: 0.5,
              flexShrink: 0,
              color: 'text.secondary',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}
          />
        </Stack>
      </Box>

      <Collapse in={expanded} timeout="auto">
        <Box
          id={`${pub.id}-abstract`}
          sx={{
            px: { xs: 3, md: 4 },
            pb: { xs: 3, md: 4 },
            pt: 0,
          }}
        >
          <Box
            sx={{
              pt: 2,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography
              variant="overline"
              color="primary.main"
              fontWeight={600}
              sx={{ display: 'block', mb: 1 }}
            >
              Abstract
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ mb: pub.url ? 2 : 0 }}>
              {pub.abstract}
            </Typography>
            {pub.url && (
              <Link
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  fontWeight: 600,
                }}
                onClick={(event) => event.stopPropagation()}
              >
                View paper
                <OpenInNewIcon sx={{ fontSize: 16 }} />
              </Link>
            )}
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}

function PublicationsSection() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <Section
      id="publications"
      title="Publications"
      subtitle="Peer-reviewed research in distributed systems, big data, and spatiotemporal analytics."
      background="paper"
    >
      <Stack spacing={3}>
        {publications.map((pub) => (
          <PublicationCard
            key={pub.id}
            pub={pub}
            expanded={expandedIds.has(pub.id)}
            onToggle={() => toggleExpanded(pub.id)}
          />
        ))}
      </Stack>
    </Section>
  );
}

export default PublicationsSection;
