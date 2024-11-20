export type Config = {
  BASE_URL: string
  APP_NAME: string
}

export const config: Config = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
  APP_NAME: import.meta.env.VITE_APP_NAME,
}
