import { Button } from '@mui/material'
import { renderMode } from '../../../../../constants'
import { useColor } from '../../../utils/hooks'
import { getFontFamily } from '../../../utils/utils'

// Text node to show in website
const ButtonNodeInWebsiteBuilder = ({ data, mode, project }) => {
  const buttonTextColor = useColor(data.styles.textColor, project)
  const buttonColor = useColor(data.styles.buttonColor, project)

  const variant =
    data.styles.variant === 'outlined'
      ? {
          backgroundColor: 'transparent',
          border: `2px solid ${buttonColor}`,
        }
      : data.styles.variant === 'contained'
      ? {
          backgroundColor: `${buttonColor}`,
          border: `2px solid ${buttonColor}`,
        }
      : {}

  const tabIndexObject = mode === renderMode.editor ? { tabIndex: -1 } : {}
  return (
    <Button
      {...tabIndexObject}
      sx={{
        width: '100%',
        height: '100%',
        textTransform: 'none',

        fontSize: data.styles.fontSize,
        fontFamily: getFontFamily(data),
        color: buttonTextColor,
        ...variant,
      }}
    >
      {data.buttonText}
    </Button>
    // <Box
    //   component={'button'}
    //   sx={{
    //     width: '100%',
    //     height: '100%',
    //     fontSize: data.styles.fontSize,
    //     fontFamily: data.styles.fontFamily,
    //     color: buttonTextColor,
    //     borderRadius: '4px',
    //     ...variant,
    //   }}
    // >
    //   {data.buttonText}
    // </Box>
  )
}

export default ButtonNodeInWebsiteBuilder
