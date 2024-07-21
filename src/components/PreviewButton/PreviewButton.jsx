import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const PreviewButton = ({ id, ...props }) => (
  <Button component={Link} to={`/preview/${id}`} {...props}>
    Preview
  </Button>
)

export default PreviewButton
