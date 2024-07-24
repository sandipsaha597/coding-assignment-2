import { Typography } from '@mui/material'

// Text node to show in website
const TextNodeInWebsiteBuilder = ({ data }) => {
  return (
    <Typography
      sx={{
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        fontFamily: data.styles.tempFontFamily || data.styles.fontFamily,
        fontSize: data.styles.fontSize,
        color:
          data.styles.colorType === 'custom' ? data.styles.colorString : '',
      }}
    >
      {data.textMessage}
    </Typography>
  )
}

export default TextNodeInWebsiteBuilder
