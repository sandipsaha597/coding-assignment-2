import { Box, TextField } from '@mui/material'
import PagesDropdown from '../../../customDropdowns/PagesDropdown/PagesDropdown'
import FileUploadAny from '../../../FileUploads/FileUploadAny'
import { BUTTON_ACTION_TYPES } from './constants/buttonActionTypes'

const ButtonActionForm = ({
  buttonActionType,
  buttonActionValue,
  onChange,
}) => {
  return (
    <>
      {buttonActionType === BUTTON_ACTION_TYPES.REDIRECT_TO_EXTERNAL_URL && (
        <TextField
          type="text"
          value={buttonActionValue}
          onChange={(e) => onChange(e.target.value)}
          label="Full URL to external website"
          variant="outlined"
          fullWidth
        />
      )}
      {buttonActionType === BUTTON_ACTION_TYPES.REDIRECT_TO_INTERNAL_URL && (
        <PagesDropdown
          value={buttonActionValue}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {buttonActionType === BUTTON_ACTION_TYPES.DOWNLOAD_A_FILE && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <TextField
            type="text"
            value={buttonActionValue}
            onChange={(e) => onChange(e.target.value)}
            label="File URL"
            variant="outlined"
            fullWidth
          />
          <FileUploadAny
            inputId="button-action-download-a-file"
            onUpload={onChange}
          />
        </Box>
      )}
    </>
  )
}

export default ButtonActionForm
