import { Stack } from '@mui/material'

import DefaultNotificator, { ProjectType } from '@/pages/notificator/DefaultNotificator'

import UnitedSpaceLogo from '../../../public/unitedSpace.png'

export default function UnitedSpaceNotificator() {
  const topics = ['mokalake-stage', 'mokalake', 'mokalake-rewardable-stage', 'mokalake-rewardable']
  const types = ['info', 'rewardable']
  const project = ProjectType.UnitedSpace

  return (
    <Stack alignItems='center' justifyContent='center' py={20}>
      <DefaultNotificator topic={topics} type={types} project={project} logo={UnitedSpaceLogo} />
    </Stack>
  )
}
