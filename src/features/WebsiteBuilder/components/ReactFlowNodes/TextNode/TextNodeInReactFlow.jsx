import { Typography } from '@mui/material'
import { renderMode } from '../../../../../constants'
import { pointerEventsNoneIfEditor } from '../utils/functions'

// Text node to show in website
const TextNodeInReactFlow = ({ data, mode }) => {
  return (
    <Typography
      sx={{
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        ...pointerEventsNoneIfEditor(mode),
      }}
    >
      {data.textMessage}
    </Typography>
  )
}

export default TextNodeInReactFlow
