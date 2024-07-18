import { memo } from 'react'
import { TextField, Typography, styled } from '@mui/material'

// take data object as input and shows it in the form
// when form value changes it calls the onChange callback function with new values
const ImageNodeEditForm = memo(function ImageNodeEditForm({
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
        id="image-url"
        type="url"
        value={data.textMessage}
        onChange={(e) => handleFormChange('src', e.target.value)}
        label="Image URL"
        variant="outlined"
      />
      <TextField
        type="text"
        value={data.alt}
        onChange={(e) => handleFormChange('alt', e.target.value)}
        label="Alt text"
        variant="outlined"
      />
    </Form>
  )
})

export default ImageNodeEditForm

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

// ideally the colors, gaps etc should come from theme
const Label = styled(Typography)({ color: '#d8d8d8', fontSize: '14px' })
const Textarea = styled('textarea')({
  padding: '10px',
  borderRadius: '4px',
  borderColor: '#dedede',
  resize: 'vertical',
})
