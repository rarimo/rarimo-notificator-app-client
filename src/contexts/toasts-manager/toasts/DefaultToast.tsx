import { Alert, AlertColor, AlertTitle, Typography, useTheme } from '@mui/material'
import { CustomContentProps, SnackbarContent, useSnackbar } from 'notistack'
import { forwardRef, ReactNode, useMemo } from 'react'

import { BusEvents, ICON_COMPONENTS, Icons } from '../../../enums'
import UiIcon from '../../../ui/UiIcon'

interface Props extends CustomContentProps {
  messageType: BusEvents

  title: string
  message: string | ReactNode
  icon: Icons | keyof typeof ICON_COMPONENTS
}

const DefaultToast = forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const { message, icon, title, id } = props
  const { spacing } = useTheme()

  const { closeSnackbar } = useSnackbar()

  const severityMap = useMemo<Record<BusEvents, AlertColor>>(
    () => ({
      [BusEvents.success]: 'success',
      [BusEvents.error]: 'error',
      [BusEvents.warning]: 'warning',
      [BusEvents.info]: 'info',
    }),
    [],
  )

  const iconComponent = useMemo(() => {
    if (!icon) return

    return Object.values(Icons).includes(icon as Icons) ? (
      <UiIcon name={icon as Icons} />
    ) : (
      <UiIcon componentName={icon as keyof typeof ICON_COMPONENTS} />
    )
  }, [icon])

  return (
    <SnackbarContent ref={ref} role='alert'>
      <Alert
        icon={iconComponent}
        severity={severityMap[props.messageType]}
        sx={{ maxWidth: spacing(100) }}
        onClose={() => closeSnackbar(id)}
      >
        <AlertTitle>{title}</AlertTitle>
        {typeof message === 'string' ? <Typography variant='body4'>{message}</Typography> : message}
      </Alert>
    </SnackbarContent>
  )
})

DefaultToast.displayName = 'DefaultToast'

export default DefaultToast
