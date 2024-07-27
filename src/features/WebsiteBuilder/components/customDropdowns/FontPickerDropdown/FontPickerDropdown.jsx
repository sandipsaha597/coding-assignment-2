import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { FONT_FAMILY_TYPES } from '../../../schemaGenerator/types/fontFamilyTypes'
import { availableFonts } from '../../../../../constants'
import { handleTempChange } from '../functions/handleTempChange'

const FontPickerDropdown = ({
  value,
  label = 'Select Font',
  onChange,
  showGlobal = true,
}) => {
  const tempChange = (value) => {
    onChange({ styles: { fontFamily: value } })
  }

  console.log('value', value)
  return (
    <FormControl fullWidth>
      <InputLabel>Select Font</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={(e) => {
          onChange(
            {
              styles: {
                fontFamily: {
                  temp: '',
                  value: e.target.value,
                  type:
                    e.target.value === 'inherit'
                      ? FONT_FAMILY_TYPES.INHERIT
                      : FONT_FAMILY_TYPES.CUSTOM,
                },
              },
            },
            true
          )
        }}
      >
        {showGlobal && (
          <MenuItem
            value={'inherit'}
            {...handleTempChange('inherit', tempChange)}
          >
            <Box sx={{ fontFamily: 'inherit' }}>Global font</Box>
          </MenuItem>
        )}
        {availableFonts.map(({ id, font }) => (
          <MenuItem
            key={id}
            value={font}
            {...handleTempChange(font, tempChange)}
            // onBlur={() => handleTempChange('')}
            // onFocus={() => handleTempChange(font)}
            // onMouseLeave={() => handleTempChange('')}
            // onMouseEnter={() => handleTempChange(font)}
          >
            <Box sx={{ fontFamily: font }}>{font}</Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default FontPickerDropdown
