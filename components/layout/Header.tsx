'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'Motocross', href: '/motocross' },
  { label: 'Trials', href: '/trials' },
  { label: 'Membership', href: '/membership' },
  { label: 'News', href: '/news' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'History', href: '/history' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar sx={{ px: { xs: 2, md: 4 }, minHeight: { xs: 64, md: 72 } }}>
          {/* Logo */}
          <Box component={Link} href="/" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', mr: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'white',
                lineHeight: 1,
              }}
            >
              OMC
              <Box component="span" sx={{ color: 'rgba(255,255,255,0.7)', ml: 0.5 }}>Racing</Box>
            </Typography>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 0.5, flex: 1 }}>
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Button
                  key={link.href}
                  component={Link}
                  href={link.href}
                  size="small"
                  sx={{
                    color: active ? 'white' : 'rgba(255,255,255,0.65)',
                    borderBottom: active ? '2px solid' : '2px solid transparent',
                    borderColor: active ? 'white' : 'transparent',
                    borderRadius: 0,
                    px: 1.5,
                    py: 1,
                    fontSize: '0.8rem',
                    '&:hover': { color: 'white', backgroundColor: 'rgba(255,255,255,0.08)' },
                  }}
                >
                  {link.label}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ flex: { lg: 0 }, ml: 'auto' }}>
            <Button
              component={Link}
              href="/membership"
              variant="outlined"
              size="small"
              sx={{
                display: { xs: 'none', lg: 'inline-flex' },
                ml: 2,
                whiteSpace: 'nowrap',
                color: 'white',
                borderColor: 'rgba(255,255,255,0.6)',
                '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' },
              }}
            >
              Join the Club
            </Button>

            {/* Mobile hamburger */}
            <IconButton
              sx={{ display: { lg: 'none' }, color: 'white' }}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { sx: { width: 280, backgroundColor: 'background.paper' } } }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
          <Typography variant="h6" sx={{ color: 'white' }}>
            OMC Racing
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    borderLeft: active ? '3px solid' : '3px solid transparent',
                    borderColor: active ? 'white' : 'transparent',
                    pl: active ? 1.625 : 2,
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    slotProps={{
                      primary: {
                        sx: {
                          fontWeight: active ? 700 : 400,
                          color: active ? 'white' : 'text.primary',
                          fontFamily: '"Barlow Condensed", sans-serif',
                          fontSize: '1.1rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Box sx={{ p: 2, mt: 'auto' }}>
          <Button
            component={Link}
            href="/membership"
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setDrawerOpen(false)}
          >
            Join the Club
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
