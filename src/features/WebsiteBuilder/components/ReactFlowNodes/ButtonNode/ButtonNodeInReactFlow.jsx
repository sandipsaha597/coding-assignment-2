import { styled } from '@mui/material'

// Text node to show in website
const ButtonNodeInWebsiteBuilder = ({ data, mode }) => {
  return <StyledButton mode={mode}>{data.buttonText}</StyledButton>
}

export default ButtonNodeInWebsiteBuilder

const StyledButton = styled('button')(() => ({
  width: '100%',
  height: '100%',
}))
