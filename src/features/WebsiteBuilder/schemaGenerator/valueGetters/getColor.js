import { getItemById } from '../../../../utils/functions'
import { COLOR_TYPES } from '../types/colorTypes'

// getColorStructure
export const getColor = (colorStructure, theme) => {
  const { type, value, temp } = colorStructure
  if (temp) return temp
  if (type === COLOR_TYPES.CUSTOM) return value
  if (type === COLOR_TYPES.INHERIT) return 'inherit'
  if (type === COLOR_TYPES.ID) {
    const [themeItem] = getItemById(value, theme)
    // if theme item gets deleted it will fallback to '#000'
    return themeItem?.color || '#000'
  }
  console.error('color type not matching')
}
