import { JsonApiClient } from '@distributedlab/jac'

import { config } from '../../config'

export const api = new JsonApiClient({
  baseUrl: config.BASE_URL,
})
