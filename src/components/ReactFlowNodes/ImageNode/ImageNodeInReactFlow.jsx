import MessageOutlinedIconMUI from '@mui/icons-material/MessageOutlined'
import { Box, Typography, styled } from '@mui/material'
import { WhatsAppIcon } from '../../../assets/svgIcons'

// Text node to show in chatbotFlow
const ImageNodeInReactFlow = ({ selected, data }) => {
  return (
    <>
      {/* simple styling as per the design provided */}
      <StyledImg
        draggable="false"
        src={data.src}
        alt={data.alt}
        style={
          {
            // width: data.width,
            // height: data.height,
            // objectFit: 'contain',
          }
        }
      />
    </>
  )
}

export default ImageNodeInReactFlow

const StyledTextNodeInReactFlow = styled('div')(({ selected }) => ({
  // the selected nodes should be highlighted
  // outline: `2px solid ${selected ? '#7386bc' : 'transparent'}`,
  // borderRadius: '10px',
  // overflow: 'hidden',
}))

const StyledImg = styled('img')({
  display: 'block',
  verticalAlign: 'middle',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
})
