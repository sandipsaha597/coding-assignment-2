import { Typography } from '@mui/material'
import { useColor } from '../../../utils/hooks'
import { getFontFamily } from '../../../utils/utils'

// Text node to show in website
const TextNodeInWebsiteBuilder = ({ data, project }) => {
  const color = useColor(data.styles.color, project)

  return (
    <Typography
      sx={{
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        fontFamily: getFontFamily(data),
        fontSize: data.styles.fontSize,
        color,
      }}
    >
      {data.textMessage}
    </Typography>
  )
}

export default TextNodeInWebsiteBuilder
