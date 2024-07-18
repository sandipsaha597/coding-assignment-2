import { styled } from '@mui/material'

// Text node to show in chatbotFlow
const ButtonNodeInReactFlow = ({ selected, data }) => {
  return (
    <>
      {/* simple styling as per the design provided */}
      <StyledTextNodeInReactFlow selected={selected}>
        <div style={{}}>
          <button>{data.buttonText}</button>
        </div>
      </StyledTextNodeInReactFlow>
    </>
  )
}

export default ButtonNodeInReactFlow

const StyledTextNodeInReactFlow = styled('div')(({ selected }) => ({
  // the selected nodes should be highlighted
  outline: `2px solid ${selected ? '#7386bc' : 'transparent'}`,
  borderRadius: '10px',
  overflow: 'hidden',
}))
