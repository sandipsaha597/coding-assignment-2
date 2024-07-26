import { Button } from '@mui/material'
import { useColor } from '../../../utils/hooks'
import { renderMode } from '../../../../../constants/renderMode'
import { getFontFamily } from '../../../schemaGenerator/valueGetters/getFontFamily'

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
      component={mode === renderMode.editor ? 'div' : undefined}
      sx={{
        width: '100%',
        height: '100%',
        textTransform: 'none',

        fontSize: data.styles.fontSize,
        fontFamily: getFontFamily(data.styles.fontFamily),
        color: buttonTextColor,
        ...variant,
      }}
    >
      {data.buttonText}
    </Button>
  )
}

export default ButtonNodeInWebsiteBuilder
