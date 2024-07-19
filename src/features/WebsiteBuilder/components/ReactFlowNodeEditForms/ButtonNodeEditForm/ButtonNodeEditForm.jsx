import { TextField, styled } from '@mui/material'
import { memo } from 'react'

// take data object as input and shows it in the form
// when form value changes it calls the onChange callback function with new values
const ButtonNodeEditForm = memo(function VideoNodeEditForm({
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
        type="text"
        value={data.buttonText}
        onChange={(e) => handleFormChange('buttonText', e.target.value)}
        label="Button Text"
        variant="outlined"
      />
    </Form>
  )
})

export default ButtonNodeEditForm

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})
