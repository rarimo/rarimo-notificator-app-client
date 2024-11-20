import { useCallback, useState } from 'react'

import { sleep } from '../helpers'

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copy = useCallback(async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setIsCopied(true)
      await sleep(2000)
      setIsCopied(false)
    } catch {
      throw new TypeError('Not copied')
    }
  }, [])

  return { copy, isCopied }
}
