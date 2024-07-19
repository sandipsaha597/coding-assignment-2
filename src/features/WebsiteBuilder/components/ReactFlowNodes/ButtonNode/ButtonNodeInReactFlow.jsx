import { styled } from '@mui/material'

// Text node to show in chatbotFlow
const ButtonNodeInReactFlow = ({ data }) => {
  return <StyledButton>{data.buttonText}</StyledButton>
}

export default ButtonNodeInReactFlow

const StyledButton = styled('button')({
  width: '100%',
  height: '100%',
})
