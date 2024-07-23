import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { memo } from 'react'
import { Counter } from '../../../../../components/Counter'
import { availableFonts } from '../../../../../constants'

// take data object as input and shows it in the form
// when form value changes it calls the onChange callback function with new values
const TextNodeEditForm = memo(function TextNodeEditForm({
  data = {},
  onChange,
}) {
  const handleFormChange = (changedValues) => {
    const newValues = {
      ...data,
      ...changedValues,
    }
    // calling the props.onChange callback function with new values
    onChange(newValues)
  }

  return (
    // default submit is prevented because pressing enter key submits the form
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="text-message"
          label="Text"
          multiline
          rows={4}
          value={data.textMessage}
          onChange={(e) => handleFormChange({ textMessage: e.target.value })}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Select font</InputLabel>
          <Select
            value={data.fontFamily || ''}
            label="Select font"
            onChange={(e) => {
              handleFormChange({
                tempFontFamily: '',
                fontFamily: e.target.value,
                fontSize: 10,
              })
            }}
          >
            {availableFonts.map(({ id, font }) => {
              return (
                <MenuItem
                  key={id}
                  value={font}
                  sx={{ fontFamily: font }}
                  onMouseLeave={() => handleFormChange({ tempFontFamily: '' })}
                  onMouseEnter={() =>
                    handleFormChange({ tempFontFamily: font })
                  }
                >
                  {font}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FontSizeChangeCounter
          value={data.fontSize}
          onChange={handleFormChange}
        />
      </Grid>
    </Grid>
  )
})

export default TextNodeEditForm

const FontSizeChangeCounter = ({ value, onChange }) => {
  return (
    <Counter
      min={0}
      max={200}
      value={value}
      onChange={(value) => onChange({ fontSize: value })}
    />
  )
}
