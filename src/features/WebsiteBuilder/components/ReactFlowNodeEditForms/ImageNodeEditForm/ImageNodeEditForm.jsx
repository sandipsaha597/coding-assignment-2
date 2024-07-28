import { Box, TextField } from '@mui/material'
import { memo } from 'react'
import ImageUpload from '../../FileUploads/ImageUpload'

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
        label="Image URL"
        variant="outlined"
        fullWidth
      />
      <TextField
        type="text"
        value={data.alt}
        onChange={(e) => handleFormChange('alt', e.target.value)}
        label="Alt text"
        variant="outlined"
        fullWidth
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ImageUpload
          inputId="image-upload-node"
          onUpload={(url) => handleFormChange('src', url)}
        />
      </Box>
    </Box>
  )
})

export default ImageNodeEditForm

// ideally the colors, gaps etc should come from theme

{
  /* <video controls width="600">
  <source src={blobURL} type="video/mp4" />
  Your browser does not support the video tag.
</video> */
}
{
  /* <a href={blobURL} download="video.mp4">
  Download Video
</a> */
}
{
  /* <button onClick={handleFileReset}>Remove Video</button> */
}
