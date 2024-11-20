import { Stack } from '@mui/material'

import DefaultNotificator, { ProjectType } from '@/pages/notificator/DefaultNotificator'

import RarimoLogo from './../../../public/rarimo.png'
export default function RarimeNotificator() {
  const topics = ['rarime', 'rarime-stage', 'rarime-rewardable-stage', 'rarime-rewardable']
  const types = ['info', 'rewardable', 'universal']
  const project = ProjectType.RariMe

  return (
    <Stack alignItems='center' justifyContent='center' py={20}>
      <DefaultNotificator topic={topics} type={types} project={project} logo={RarimoLogo} />
    </Stack>
  )
}
