import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { BUTTON_ACTION_TYPES } from './constants/buttonActionTypes'

// ;(e) => {
//   setButtonActionValue('')
//   setButtonActionType(e.target.value)
// }
const ButtonActionsSelect = ({ value, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Select button action</InputLabel>
      <Select
        value={value}
        label="Select button action"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value={''}>No Action</MenuItem>
        <MenuItem value={BUTTON_ACTION_TYPES.REDIRECT_TO_EXTERNAL_URL}>
          Redirect to external URL
        </MenuItem>
        <MenuItem value={BUTTON_ACTION_TYPES.REDIRECT_TO_INTERNAL_URL}>
          Redirect to internal URL
        </MenuItem>
        <MenuItem value={BUTTON_ACTION_TYPES.DOWNLOAD_A_FILE}>
          Download a file
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ButtonActionsSelect
