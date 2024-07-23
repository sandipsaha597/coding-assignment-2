import { Typography } from '@mui/material'

// Text node to show in website
const TextNodeInWebsiteBuilder = ({ data }) => {
  return (
    <Typography
      sx={{
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        fontFamily: data.tempFontFamily || data.fontFamily || 'inherit',
        fontSize: data.fontSize || 'inherit',
      }}
    >
      {data.textMessage}
    </Typography>
  )
}

export default TextNodeInWebsiteBuilder
