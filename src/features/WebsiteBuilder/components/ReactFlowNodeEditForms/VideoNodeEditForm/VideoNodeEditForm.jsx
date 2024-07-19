import { memo } from 'react'
import { TextField, Typography, styled } from '@mui/material'

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
    // default submit is prevented because pressing enter key submits the form
    <Form onSubmit={(e) => e.preventDefault()}>
      <TextField
        type="url"
        value={data.src}
        onChange={(e) => handleFormChange('src', e.target.value)}
        label="Video URL"
        variant="outlined"
      />
      <TextField
        type="text"
        value={data.title}
        onChange={(e) => handleFormChange('title', e.target.value)}
        label="Title"
        variant="outlined"
      />
    </Form>
  )
})

export default VideoNodeEditForm

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})
