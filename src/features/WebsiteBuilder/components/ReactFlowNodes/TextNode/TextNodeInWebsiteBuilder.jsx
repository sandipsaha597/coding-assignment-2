import { Typography } from '@mui/material'
import { useColor } from '../../../utils/hooks'
import { getFontFamily } from '../../../schemaGenerator/valueGetters/getFontFamily'

// Text node to show in website
const TextNodeInWebsiteBuilder = ({ data, project }) => {
  const color = useColor(data.styles.color, project)

  return (
    <Typography
      sx={{
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        fontFamily: getFontFamily(data.styles.fontFamily),
        fontSize: data.styles.fontSize,
        color,
      }}
    >
      {data.textMessage}
    </Typography>
  )
}

export default TextNodeInWebsiteBuilder
