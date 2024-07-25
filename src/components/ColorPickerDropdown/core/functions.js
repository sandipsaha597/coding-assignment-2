import { COLOR_TYPES } from '../../../store/projectAndTemplatesSlice/projectsAndTemplatesSlice'

export const getColorPickerDropdownValueFromColorStructure = (
  colorStructure
) => {
  const { type, value } = colorStructure
  if (type === COLOR_TYPES.CUSTOM || type === COLOR_TYPES.INHERIT) return type
  if (type === COLOR_TYPES.ID) return value
}
