import { sendNotificationRariMe, sendNotificationUnitedSpace } from '../../api/firebase/firebaseApi'
import { NotificationRequest } from '../../api/firebase/modules/FirebaseModule'
import { createStore } from '../../helpers'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const [firebaseState, useFirebaseState] = createStore('', {}, _ => ({
  async sendNotificationRarime(payload: NotificationRequest) {
    await sendNotificationRariMe(payload)
  },
  async sendNotificationUnitedSpace(payload: NotificationRequest) {
    await sendNotificationUnitedSpace(payload)
  },
}))
