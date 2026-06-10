import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import { profile } from '../../data/profile';
import { navSections, scrollToSection, useActiveSection } from '../../hooks/useActiveSection';
import { NAV_HEIGHT } from '../../constants/layout';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const activeSection = useActiveSection();
  const isHome = location.pathname === '/';

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (sectionId: string) => {
    handleCloseNavMenu();
    if (isHome) {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const handleBrandClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const isActive = (sectionId: string) => isHome && activeSection === sectionId;

  const navButtonSx = (sectionId: string) => ({
    my: 2,
    mx: 0.5,
    color: isActive(sectionId) ? 'primary.main' : 'text.primary',
    fontWeight: isActive(sectionId) ? 700 : 500,
    display: 'block',
    '&:hover': {
      color: 'primary.main',
      backgroundColor: 'transparent',
    },
  });

  return (
    <AppBar position="fixed" sx={{ height: NAV_HEIGHT }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: `${NAV_HEIGHT}px !important` }}>
          <Typography
            variant="h6"
            noWrap
            component="button"
            onClick={handleBrandClick}
            sx={{
              mr: 4,
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'text.primary',
              textDecoration: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              p: 0,
            }}
          >
            {profile.name.split(' ')[0]} {profile.name.split(' ')[1]?.[0]}.
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="Open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {navSections.map((section) => (
                <MenuItem key={section.id} onClick={() => handleNavClick(section.id)}>
                  <Typography sx={{ textAlign: 'center' }}>{section.label}</Typography>
                </MenuItem>
              ))}
              <MenuItem
                component="a"
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography>Resume</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {navSections.map((section) => (
              <Button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                sx={navButtonSx(section.id)}
              >
                {section.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<DownloadIcon />}
              variant="outlined"
              color="primary"
              size="small"
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
