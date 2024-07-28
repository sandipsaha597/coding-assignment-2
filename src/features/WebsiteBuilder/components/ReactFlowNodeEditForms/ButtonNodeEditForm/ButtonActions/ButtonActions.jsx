import { Button, Grid } from '@mui/material'
import ButtonActionForm from './ButtonActionForm'
import ButtonActionsSelect from './ButtonActionsSelect'
import { useTriggerButtonAction } from './hooks/useTriggerButtonAction'
import { BUTTON_ACTION_TYPES } from './constants/buttonActionTypes'

const ButtonActions = ({ buttonActionType, buttonActionValue, onChange }) => {
  const { triggerButtonAction } = useTriggerButtonAction()

  const testActionButtonAvailable =
    [BUTTON_ACTION_TYPES.REDIRECT_TO_INTERNAL_URL, ''].includes(
      buttonActionType
    ) === false

  return (
    <>
      <Grid item xs="auto">
        Button Action:
      </Grid>
      <Grid item xs>
        <ButtonActionsSelect
          value={buttonActionType}
          onChange={(type) =>
            onChange({ buttonActionType: type, buttonActionValue: '' })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <ButtonActionForm
          buttonActionType={buttonActionType}
          buttonActionValue={buttonActionValue}
          onChange={(value) => onChange({ buttonActionValue: value })}
        />
      </Grid>
      {testActionButtonAvailable && (
        <Grid xs={12} item textAlign={'center'}>
          <Button
            variant="outlined"
            onClick={() =>
              triggerButtonAction(buttonActionType, buttonActionValue)
            }
          >
            Action test button
          </Button>
        </Grid>
      )}
    </>
  )
}

export default ButtonActions
