import { FONT_FAMILY_TYPES } from '../types/fontFamilyTypes'

export const getFontFamilyStructure = ({
  type = FONT_FAMILY_TYPES.CUSTOM,
  value = 'Arial, sans-serif',
  temp = '',
}) => {
  return {
    type,
    value,
    temp,
  }
}
