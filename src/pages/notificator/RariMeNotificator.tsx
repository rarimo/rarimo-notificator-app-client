import { Stack } from '@mui/material'
import Box from '@mui/material/Box'

import DefaultNotificator, { ProjectType } from '@/pages/notificator/DefaultNotificator'

import RarimoLogo from './../../../public/rarimo.png'
export default function RarimeNotificator() {
  const topics = ['rarime-stage']
  const types = ['info', 'rewardable', 'universal']
  const project = ProjectType.RariMe

  return (
    <Stack alignItems='center' justifyContent='center'>
      <Box
        component='img'
        src={RarimoLogo}
        paddingBottom={10}
        paddingTop={10}
        alt='rarime'
        sx={{
          width: 256,
          height: 256,
          objectFit: 'contain',
        }}
      />
      <DefaultNotificator topic={topics} type={types} project={project} />
    </Stack>
  )
}
