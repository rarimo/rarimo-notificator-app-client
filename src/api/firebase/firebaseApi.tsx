import { ApiServicePaths } from '../../enums'
import { api } from '../clients'
import { NotificationRequest } from './modules/FirebaseModule'

export const sendNotificationRariMe = async (notification: NotificationRequest) => {
  return api.post(ApiServicePaths.RariMe, {
    body: notification,
  })
}

export const sendNotificationUnitedSpace = async (notification: NotificationRequest) => {
  return api.post(ApiServicePaths.UnitedSpace, {
    body: notification,
  })
}
