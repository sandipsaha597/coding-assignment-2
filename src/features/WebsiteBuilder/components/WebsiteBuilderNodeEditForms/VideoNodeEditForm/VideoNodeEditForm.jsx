import { Box, Grid, TextField, styled } from '@mui/material'
import { memo } from 'react'
import VideoUpload from '../../FileUploads/VideoUpload'
import DeleteNodeButton from '../../DeleteNodeButton/DeleteNodeButton'
import { formInputRowSpacing } from '../constants/formInputRowSpacing'

// take data object as input and shows it in the form
// when form value changes it calls the onChange callback function with new values
const VideoNodeEditForm = memo(function VideoNodeEditForm({
  id,
  onDeleteNode,
  data = {},
  onChange,
}) {
  const revokeURL = () => URL.revokeObjectURL(data.src)
  const handleFormChange = (key, value) => {
    if (key === 'src') revokeURL()
    const values = {
      ...data,
      [key]: value,
    }
    // calling the props.onChange callback function with new values
    onChange(values)
  }

  return (
    <Grid container spacing={formInputRowSpacing}>
      <Grid item xs={12}>
        <DeleteNodeButton
          id={id}
          onDeleteNode={() => {
            revokeURL()
            onDeleteNode(id)
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          type="url"
          value={data.src}
          onChange={(e) => handleFormChange('src', e.target.value)}
          label="Video URL"
          variant="outlined"
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          type="text"
          value={data.title}
          onChange={(e) => handleFormChange('title', e.target.value)}
          label="Title"
          variant="outlined"
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <VideoUpload
            inputId={'video-node-edit-form-video-upload'}
            onUpload={(url) => handleFormChange('src', url)}
          />
        </Box>
      </Grid>
    </Grid>
  )
})

export default VideoNodeEditForm

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})
