import { styled } from '@mui/material'
import { pointerEventsNoneIfEditor } from '../utils/functions'

// Text node to show in website
const ButtonNodeInWebsiteBuilder = ({ data, mode }) => {
  return <StyledButton mode={mode}>{data.buttonText}</StyledButton>
}

export default ButtonNodeInWebsiteBuilder

const StyledButton = styled('button')(({ mode }) => ({
  width: '100%',
  height: '100%',
  ...pointerEventsNoneIfEditor(mode),
}))
