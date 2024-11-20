import { v4 as uuidv4 } from 'uuid'

export function generateQrCodeValue() {
  return btoa(uuidv4().replace(/-/g, '').slice(0, 16))
}
