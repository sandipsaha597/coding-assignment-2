import { COLOR_TYPES } from '../../../store/projectAndTemplatesSlice/projectsAndTemplatesSlice'
import { getItemById } from '../../../utils/functions'
import { FONT_FAMILY_TYPES } from '../components/NodesPanel/constants'

export const getNewPageObj = () => {
  const id = crypto.randomUUID()
  return {
    id,
    pageDetails: {
      title: id,
      description: '',
      slug: `${id}`,
    },
    nodes: [],
  }
}

export const getNewNodeObject = ({
  id,
  position,
  type,
  data,
  width,
  height,
}) => {
  return {
    id: id ?? crypto.randomUUID(),
    position,
    type,
    data,
    width,
    height,
  }
}

export const getNewNavbarItemObj = () => {
  return {
    id: crypto.randomUUID(),
    title: 'new menu item',
    to: '',
  }
}

export const getFontFamily = (fontFamilyStructure) => {
  const { type, value, temp } = fontFamilyStructure
  if (temp) return temp
  if (type === FONT_FAMILY_TYPES.CUSTOM) return value
  if (type === FONT_FAMILY_TYPES.INHERIT) return 'inherit'
  console.error('fontFamily type not matching')
}

export const getColor = (colorType, colorString, theme) => {
  if (colorType === 'custom') return colorString
  if (colorType === 'inherit') return 'inherit'
  const [themeItem] = getItemById(colorType, theme)
  return themeItem.color
}

// getColorStructure
export const getColor2 = (colorStructure, theme) => {
  const { type, value, temp } = colorStructure
  if (temp) return temp
  if (type === COLOR_TYPES.CUSTOM) return value
  if (type === COLOR_TYPES.INHERIT) return 'inherit'
  if (type === COLOR_TYPES.ID) {
    const [themeItem] = getItemById(value, theme)
    return themeItem.color
  }
  console.error('color type not matching')
}
