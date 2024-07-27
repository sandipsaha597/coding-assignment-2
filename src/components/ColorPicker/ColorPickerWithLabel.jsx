import { Grid, Typography } from '@mui/material'
import ColorPicker from './ColorPicker'

const ColorPickerWithLabel = ({
  color,
  onChange,
  label,

  wrapperComponentProps,
  colorPickerWrapperProps,
  colorPickerProps,
  labelWrapperProps,
  labelProps,
}) => {
  return (
    <Grid
      container
      item
      alignItems={'center'}
      columnSpacing={2}
      {...wrapperComponentProps}
    >
      <Grid item xs="auto" {...colorPickerWrapperProps}>
        <ColorPicker color={color} onChange={onChange} {...colorPickerProps} />
      </Grid>
      <Grid item xs {...labelWrapperProps}>
        <Typography {...labelProps}>{label}</Typography>
      </Grid>
    </Grid>
  )
}

export default ColorPickerWithLabel
