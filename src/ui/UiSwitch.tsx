import { FormControlLabel, Switch, type SwitchProps } from '@mui/material'
import { forwardRef, ReactNode } from 'react'

interface Props extends SwitchProps {
  label?: ReactNode
}

const UiSwitch = forwardRef(({ label, value, ...rest }: Props, ref) => {
  return label ? (
    <FormControlLabel
      inputRef={ref}
      control={<Switch {...rest} defaultChecked={!!value} />}
      label={label}
      sx={{ gap: 4, mx: 0 }}
    />
  ) : (
    <Switch {...rest} defaultChecked={!!value} inputRef={ref} />
  )
})

export default UiSwitch
