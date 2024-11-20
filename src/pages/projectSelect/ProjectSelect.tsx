import { Box, Button, Stack } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { RoutePaths } from '@/enums'

export default function ProjectSelect() {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={4}
        justifyContent='center'
        alignItems='center'
      >
        <Button
          variant='contained'
          color='primary'
          size='large'
          component={NavLink}
          to={RoutePaths.RariMe}
          sx={{
            minWidth: 220,
            minHeight: 80,
            fontSize: '1.2rem',
            textTransform: 'none',
            borderRadius: 3,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          RariMe
        </Button>

        {/* UnitedSpace Button */}
        <Button
          variant='outlined'
          color='secondary'
          component={NavLink}
          to={RoutePaths.UnitedSpace}
          size='large'
          sx={{
            minWidth: 220,
            minHeight: 80,
            fontSize: '1.2rem',
            textTransform: 'none',
            borderRadius: 3,
            borderWidth: 2,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
              borderColor: 'secondary.main',
            },
          }}
        >
          UnitedSpace
        </Button>
      </Stack>
    </Box>
  )
}
