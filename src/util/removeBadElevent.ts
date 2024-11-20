type Value = string | null | object | Array<string>

const isGoodValue = (val: Value): boolean => {
  return val !== null && val !== undefined && val !== '-' && val !== 'N/A'
}

const removeBadValues = (obj: Value): Value => {
  if (Array.isArray(obj)) {
    return obj.filter(isGoodValue).map(removeBadValues)
  }

  if (typeof obj === 'object' && obj !== null) {
    const result: Record<string, Value> = {}
    for (const [key, value] of Object.entries(obj)) {
      if (isGoodValue(value)) {
        result[key] = removeBadValues(value)
      }
    }
    return result
  }

  return obj
}

export default removeBadValues
