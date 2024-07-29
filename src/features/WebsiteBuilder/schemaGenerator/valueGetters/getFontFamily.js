import { FONT_FAMILY_TYPES } from '../types/fontFamilyTypes'

export const getFontFamily = (fontFamilyStructure) => {
  const { type, value, temp } = fontFamilyStructure
  if (temp) return temp
  if (type === FONT_FAMILY_TYPES.CUSTOM) return value
  if (type === FONT_FAMILY_TYPES.INHERIT) return 'inherit'
  //
  console.error('fontFamily type not matching received ', type)
}
