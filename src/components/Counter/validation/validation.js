import { isValidNumber } from '../../../utils/functions'

export const validation = (newValue, min, max) => {
  if (!isValidNumber(newValue)) return false
  const newValueNumberType = Number(newValue)
  if (newValueNumberType < min) return false
  if (newValueNumberType > max) return false
  return true
}
