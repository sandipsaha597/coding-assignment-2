import { COLOR_TYPES } from '../types/colorTypes'

export const getColorStructure = ({
  type = COLOR_TYPES.CUSTOM,
  value = '#000',
  temp = '',
}) => {
  return {
    type,
    value,
    temp,
  }
}
