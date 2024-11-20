/**
 * Enum for Notification Targets
 */
export enum NotificationTarget {
  AndroidAndIOS = 'Android & IOS',
  OnlyAndroid = 'Only Android',
  OnlyIOS = 'Only IOS',
}

export const notificationTargetToString = (target: NotificationTarget) => {
  switch (target) {
    case NotificationTarget.AndroidAndIOS:
      return 'ios-and-android'
    case NotificationTarget.OnlyAndroid:
      return 'android'
    case NotificationTarget.OnlyIOS:
      return 'ios'
  }
}

/**
 * Interface representing a Notification Request
 */
export interface NotificationRequest {
  /**
   * Content of the notification (optional)
   */
  content?: string

  /**
   * Description of the notification
   */
  description: string

  /**
   * Target platform for the notification
   */
  target: string

  /**
   * Title of the notification
   */
  title: string

  /**
   * Topic of the notification
   */
  topic: string

  /**
   * Type of the notification
   */
  type: string
}
