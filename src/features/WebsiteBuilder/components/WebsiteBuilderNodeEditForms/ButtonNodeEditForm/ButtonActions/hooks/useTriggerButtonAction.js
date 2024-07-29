import { useCallback } from 'react'
import { BUTTON_ACTION_TYPE_TO_FUNCTION_MAP } from '../constants/buttonActionTypeToFunctionMap'
import { useNavigate } from 'react-router-dom'

export const useTriggerButtonAction = () => {
  const navigate = useNavigate()

  const triggerButtonAction = useCallback(
    (buttonActionType, buttonActionValue) => {
      const actionFunction =
        BUTTON_ACTION_TYPE_TO_FUNCTION_MAP[buttonActionType]
      actionFunction && actionFunction(buttonActionValue, { navigate })
    },
    [navigate]
  )

  return { triggerButtonAction }
}
