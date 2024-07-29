import { Button } from '@mui/material'
import { getFontFamily } from '../../../schemaGenerator/valueGetters/getFontFamily'
import { useColor } from '../../../utils/hooks'
import { useTriggerButtonAction } from '../../WebsiteBuilderNodeEditForms/ButtonNodeEditForm/ButtonActions/hooks/useTriggerButtonAction'
import { renderMode } from '../../../../shared/constants/renderMode'

// Text node to show in website
const ButtonNodeInWebsiteBuilder = ({ data, mode, project }) => {
  const buttonTextColor = useColor(data.styles.textColor, project)
  const buttonColor = useColor(data.styles.buttonColor, project)

  const { triggerButtonAction } = useTriggerButtonAction()

  const buttonActionType = data.action.buttonActionType
  const buttonActionValue = data.action.buttonActionValue

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

  const editorProps = {
    tabIndex: -1,
    onClick: (e) => e.preventDefault(),
    component: 'div',
  }
  const previewProps = {
    onClick: () => triggerButtonAction(buttonActionType, buttonActionValue),
  }

  const buttonProps = mode === renderMode.editor ? editorProps : previewProps
  return (
    <Button
      {...buttonProps}
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
