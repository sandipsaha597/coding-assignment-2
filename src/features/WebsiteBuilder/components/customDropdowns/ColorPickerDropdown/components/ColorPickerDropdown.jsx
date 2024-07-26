import { Grid } from '@mui/material'
import { ColorDropdown } from './ColorDropdown'
import { COLOR_TYPES } from '../../../../schemaGenerator/types/colorTypes'
import ColorPicker from '../../../../../../components/ColorPicker/ColorPicker'

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
      {value === COLOR_TYPES.CUSTOM && (
        <Grid item xs={'auto'}>
          <ColorPicker
            color={customColor}
            onChange={({ hexa }) => {
              onChange({ type: COLOR_TYPES.CUSTOM, value: hexa })
            }}
          />
        </Grid>
      )}
    </Grid>
  )
}

export default ColorPickerDropdown
