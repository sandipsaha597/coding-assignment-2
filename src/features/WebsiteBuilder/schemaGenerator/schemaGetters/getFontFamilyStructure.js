import { FONT_FAMILY_TYPES } from '../types/fontFamilyTypes'

export const getFontFamilyStructure = ({
  type = FONT_FAMILY_TYPES.INHERIT,
  value = 'inherit',
  temp = '',
}) => {
  return {
    type,
    value,
    temp,
  }
}
