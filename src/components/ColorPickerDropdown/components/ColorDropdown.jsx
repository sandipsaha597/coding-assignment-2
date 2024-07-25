import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { ColoredBox } from '../../ColoredBox/ColoredBox'
import { useProjectThemeAndGlobalStyle } from '../../../features/WebsiteBuilder/hooks/useProjectThemeAndGlobalStyles/useProjectThemeAndGlobalStyles'
import { getItemById } from '../../../utils/functions'
import { COLOR_TYPES } from '../../../store/projectAndTemplatesSlice/projectsAndTemplatesSlice'

export const ColorDropdown = ({
  value,
  onChange,
  customColor,
  dropdownLabel = 'Color',
  showGlobal = true,
}) => {
  const { themeAndGlobalStyles } = useProjectThemeAndGlobalStyle()

  return (
    <FormControl fullWidth>
      <InputLabel>{dropdownLabel}</InputLabel>
      <Select
        value={value}
        label={dropdownLabel}
        onChange={(e) => {
          if (
            e.target.value === COLOR_TYPES.CUSTOM ||
            e.target.value === COLOR_TYPES.INHERIT
          ) {
            onChange({ type: e.target.value, value: '#000' })
            return
          }
          const [colorObj, index] = getItemById(
            e.target.value,
            themeAndGlobalStyles.theme
          )
          if (index === -1) {
            console.error('Chosen theme color id does not exist')
            return
          } else {
            onChange({ type: COLOR_TYPES.ID, value: colorObj.id })
          }
        }}
      >
        {/* <ColorMenuItem
                value={'inherit'}
                text="Global color"
                color={'inherit'}
              />
              <ColorMenuItem
                value={'custom'}
                text="Custom color"
                color={data.styles.colorString}
              /> */}
        {showGlobal && (
          <MenuItem
            value={COLOR_TYPES.INHERIT}
            // onMouseLeave={() => handleFormChange({ tempFontFamily: '' })}
            // onMouseEnter={() =>
            //   handleFormChange({ tempFontFamily: 'inherit' })
            // }
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ColoredBox color={'inherit'} />
              <span>Global Color</span>
            </Box>
          </MenuItem>
        )}
        <MenuItem
          value={COLOR_TYPES.CUSTOM}
          // onMouseLeave={() => handleFormChange({ tempFontFamily: '' })}
          // onMouseEnter={() =>
          //   handleFormChange({ tempFontFamily: 'inherit' })
          // }
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ColoredBox color={customColor} />
            <span>Custom Color</span>
          </Box>
        </MenuItem>

        {themeAndGlobalStyles.theme.map((v) => {
          return (
            <MenuItem
              key={v.id}
              value={v.id}

              // onMouseLeave={() => handleFormChange({ tempFontFamily: '' })}
              // onMouseEnter={() =>
              //   handleFormChange({ tempFontFamily: 'inherit' })
              // }
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ColoredBox color={v.color} />
                <span>{v.name}</span>
              </Box>
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}
