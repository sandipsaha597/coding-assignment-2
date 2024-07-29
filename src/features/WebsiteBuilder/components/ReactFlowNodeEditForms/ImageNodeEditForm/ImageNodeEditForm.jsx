import { Box, Grid, TextField } from '@mui/material'
import { memo } from 'react'
import ImageUpload from '../../FileUploads/ImageUpload'
import DeleteNodeButton from '../../DeleteNodeButton/DeleteNodeButton'
import { formInputRowSpacing } from '../constants/formInputRowSpacing'

// take data object as input and shows it in the form
// when form value changes it calls the onChange callback function with new values
const ImageNodeEditForm = memo(function ImageNodeEditForm({
  id,
  onDeleteNode,
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
    <Grid container spacing={formInputRowSpacing}>
      <Grid item xs={12}>
        <DeleteNodeButton id={id} onDeleteNode={onDeleteNode} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="url"
          value={data.src}
          onChange={(e) => handleFormChange('src', e.target.value)}
          label="Image URL"
          variant="outlined"
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          type="text"
          value={data.alt}
          onChange={(e) => handleFormChange('alt', e.target.value)}
          label="Alt text"
          variant="outlined"
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ImageUpload
            inputId="image-upload-node"
            onUpload={(url) => handleFormChange('src', url)}
          />
        </Box>
      </Grid>
    </Grid>
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
