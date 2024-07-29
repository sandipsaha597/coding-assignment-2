import { styled } from '@mui/material'
import { pointerEventsNoneIfEditor } from '../utils/functions'

// Text node to show in website
const ImageNodeInWebsiteBuilder = ({ data, mode }) => {
  return (
    <StyledImg draggable="false" src={data.src} alt={data.alt} mode={mode} />
  )
}

export default ImageNodeInWebsiteBuilder

const StyledImg = styled('img')(({ mode }) => ({
  display: 'block',
  verticalAlign: 'middle',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  ...pointerEventsNoneIfEditor(mode),
}))
