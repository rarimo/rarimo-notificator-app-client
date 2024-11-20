import { Stack } from '@mui/material'
import Box from '@mui/material/Box'

import DefaultNotificator, { ProjectType } from '@/pages/notificator/DefaultNotificator'

import UnitedSpaceLogo from '../../../public/unitedSpace.png'

export default function UnitedSpaceNotificator() {
  const topics = ['mokalake-stage']
  const types = ['info', 'rewardable', 'mokalake-rewardable-stage', 'mokalake-rewardable']
  const project = ProjectType.UnitedSpace

  return (
    <Stack alignItems='center' justifyContent='center'>
      <Box
        component='img'
        src={UnitedSpaceLogo}
        paddingBottom={10}
        paddingTop={10}
        alt='rarime'
        sx={{
          width: 256, // Set a specific width
          height: 256, // Set a specific height
          objectFit: 'contain', // Ensures the image scales proportionally
        }}
      />
      <DefaultNotificator topic={topics} type={types} project={project} />
    </Stack>
  )
}
