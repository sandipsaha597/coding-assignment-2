import { Typography } from '@mui/material'

// Text node to show in website
const TextNodeInReactFlow = ({ data }) => {
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

export default TextNodeInReactFlow
