import { Typography } from '@mui/material'

// Text node to show in website
const TextNodeInWebsiteBuilder = ({ data }) => {
  return (
    <Typography
      sx={{
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}
    >
      {data.textMessage}
    </Typography>
  )
}

export default TextNodeInWebsiteBuilder
