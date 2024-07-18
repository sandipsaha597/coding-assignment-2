import MessageOutlinedIconMUI from '@mui/icons-material/MessageOutlined'
import { Box, Typography, styled } from '@mui/material'
import { WhatsAppIcon } from '../../../assets/svgIcons'

// Text node to show in chatbotFlow
const TextNodeInReactFlow = ({ selected, data }) => {
  return (
    <>
      {/* simple styling as per the design provided */}
      <StyledTextNodeInReactFlow selected={selected}>
        <div>
          <Typography
            sx={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            {data.textMessage}
          </Typography>
        </div>
      </StyledTextNodeInReactFlow>
    </>
  )
}

export default TextNodeInReactFlow

const StyledTextNodeInReactFlow = styled('div')(({}) => ({}))
