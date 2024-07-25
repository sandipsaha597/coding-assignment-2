import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { availableFonts } from '../../constants'
import { useCallback } from 'react'

const FontPickerDropdown = ({ value, onChange }) => {
  const menuItemCommonProps = useCallback(
    (font) => {
      const setTempFontFamilyEmptyString = () =>
        onChange({ styles: { fontFamily: { temp: '' } } })

      const setTempFontFamilyHighlightedFont = () =>
        onChange({ styles: { fontFamily: { value: font } } })

      return {
        onBlur: setTempFontFamilyEmptyString,
        onMouseLeave: setTempFontFamilyEmptyString,

        onFocus: setTempFontFamilyHighlightedFont,
        onMouseEnter: setTempFontFamilyHighlightedFont,
      }
    },
    [onChange]
  )
  return (
    <FormControl fullWidth>
      <InputLabel>Select font</InputLabel>
      <Select
        value={value}
        label="Select font"
        onChange={(e) => {
          onChange({
            styles: {
              tempFontFamily: '',
              fontFamily: e.target.value,
            },
          })
        }}
      >
        <MenuItem value={'inherit'} {...menuItemCommonProps('inherit')}>
          <Box sx={{ fontFamily: 'inherit' }}>Global Font</Box>
        </MenuItem>
        {availableFonts.map(({ id, font }) => {
          return (
            <MenuItem key={id} value={font} {...menuItemCommonProps(font)}>
              <Box sx={{ fontFamily: font }}>{font}</Box>
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default FontPickerDropdown
