import { FONT_FAMILY_TYPES } from '../types/fontFamilyTypes'

export const getFontFamilyStructure = ({
  /* If type is custom, the value will contain the fontFamily. If type is inherit, it will be inherit.*/
  type = FONT_FAMILY_TYPES.INHERIT,
  value = 'inherit',
  temp = '',
}) => {
  return {
    type,
    value,
    /* temp has the highest priority of all. It gives user a preview of their 
    change before selecting the actual change. If the user does or doesn't select the change
    either way it should become empty again  */
    temp,
  }
}
