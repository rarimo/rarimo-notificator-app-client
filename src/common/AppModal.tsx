import { Modal, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface Props {
  open: boolean
  handleClose: () => void
  title: string
  description: string
  onConfirm: () => void
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400, // Adjust the width as needed
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
}

export default function AppModal({ open, handleClose, title, description, onConfirm }: Props) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
      <Box sx={modalStyle}>
        <Typography id='modal-title' variant='h6' component='h2'>
          {title}
        </Typography>
        <Typography id='modal-description' sx={{ mt: 2 }}>
          {description}
        </Typography>

        <Stack direction='row' spacing={2} justifyContent='flex-end' sx={{ mt: 4 }}>
          <Button variant='outlined' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='contained' onClick={onConfirm} color='primary'>
            Confirm
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}
