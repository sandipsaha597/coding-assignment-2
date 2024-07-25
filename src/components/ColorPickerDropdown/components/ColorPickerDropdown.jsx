import { Grid } from '@mui/material'
import ColorPicker from '../../ColorPicker/ColorPicker'
import { ColorDropdown } from './ColorDropdown'
import { COLOR_TYPES } from '../../../store/projectAndTemplatesSlice/projectsAndTemplatesSlice'

const ColorPickerDropdown = ({
  value,
  customColor,
  onChange,
  dropdownLabel,
  showGlobal,
}) => {
  return (
    <Grid container item xs={12} alignItems={'center'} spacing={2}>
      <Grid item xs>
        <ColorDropdown
          showGlobal={showGlobal}
          dropdownLabel={dropdownLabel}
          value={value}
          customColor={customColor}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={'auto'}>
        {value === COLOR_TYPES.CUSTOM && (
          <ColorPicker
            color={customColor}
            onChange={({ hexa }) => {
              onChange({ type: COLOR_TYPES.CUSTOM, value: hexa })
            }}
          />
        )}
      </Grid>
    </Grid>
  )
}

export default ColorPickerDropdown
