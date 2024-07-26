import { COLOR_TYPES } from '../../../../schemaGenerator/types/colorTypes'

// {
//   type: 'custom',
//   value: 'a hex color'
// },
// {
//   type: 'inherit',
//   value: 'inherit',
// }
// {
//   type: 'id',
//   value: 'id of theme color'
// }
export const getColorPickerDropdownValueFromColorStructure = (
  colorStructure
) => {
  const { type, value } = colorStructure
  if (type === COLOR_TYPES.CUSTOM || type === COLOR_TYPES.INHERIT) return type
  if (type === COLOR_TYPES.ID) return value
}
