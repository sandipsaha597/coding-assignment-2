import { COLOR_TYPES } from '../types/colorTypes'

export const getColorStructure = ({
  /* If type is custom, the value will contain the color. If type is inherit, it will be inherit. 
  If type is ID the value will have an ID from a theme item. Upon that theme color change UI reflects 
  the changes immediately. Use the valueGetter "getColor" function to get the currentColor */
  type = COLOR_TYPES.CUSTOM,
  value = '#000',
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
