import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import WarningIcon from '@mui/icons-material/Warning';
import UpdateIcon from '@mui/icons-material/Update';
import type { TrackStatus } from '@/lib/content';

const statusConfig = {
  Open: {
    color: '#1B5E20',
    borderColor: '#4CAF50',
    chipColor: 'success' as const,
    icon: <CheckCircleIcon fontSize="small" />,
    label: 'Track Open',
  },
  Closed: {
    color: '#7f0000',
    borderColor: '#f44336',
    chipColor: 'error' as const,
    icon: <CancelIcon fontSize="small" />,
    label: 'Track Closed',
  },
  Limited: {
    color: '#4A3500',
    borderColor: '#FF9800',
    chipColor: 'warning' as const,
    icon: <WarningIcon fontSize="small" />,
    label: 'Limited Riding',
  },
};

type Props = { status: TrackStatus };

export default function TrackStatusBanner({ status }: Props) {
  const config = statusConfig[status.status];
  const updatedDate = new Date(status.updated_at).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'America/Boise',
  });

  return (
    <Box
      sx={{
        backgroundColor: config.color,
        borderBottom: `3px solid ${config.borderColor}`,
        py: 1.5,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 0.75, sm: 2 },
          }}
        >
          <Chip
            icon={config.icon}
            label={config.label}
            color={config.chipColor}
            size="small"
            sx={{ fontWeight: 700, flexShrink: 0 }}
          />
          <Typography variant="body2" sx={{ flex: 1, color: 'rgba(255,255,255,0.95)' }}>
            {status.message}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>
            <UpdateIcon sx={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }} />
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', whiteSpace: 'nowrap' }}>
              Updated {updatedDate}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
