import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'

import { RoutePaths } from '../enums'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Notificator
          </Typography>
          <Button component={NavLink} to={RoutePaths.RariMe} color='inherit'>
            RariMe
          </Button>
          <Button component={NavLink} to={RoutePaths.UnitedSpace} color='inherit'>
            United Space
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
