import { Box, TextField, styled } from '@mui/material'
import { memo } from 'react'
import VideoUpload from '../../FileUploads/VideoUpload'

// take data object as input and shows it in the form
// when form value changes it calls the onChange callback function with new values
const VideoNodeEditForm = memo(function VideoNodeEditForm({
  data = {},
  onChange,
}) {
  const handleFormChange = (key, value) => {
    const values = {
      ...data,
      [key]: value,
    }
    // calling the props.onChange callback function with new values
    onChange(values)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <TextField
        type="url"
        value={data.src}
        onChange={(e) => handleFormChange('src', e.target.value)}
        label="Video URL"
        variant="outlined"
        fullWidth
      />
      <TextField
        type="text"
        value={data.title}
        onChange={(e) => handleFormChange('title', e.target.value)}
        label="Title"
        variant="outlined"
        fullWidth
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <VideoUpload
          inputId={'video-node-edit-form-video-upload'}
          onUpload={(url) => handleFormChange('src', url)}
        />
      </Box>
    </Box>
  )
})

export default VideoNodeEditForm

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})
