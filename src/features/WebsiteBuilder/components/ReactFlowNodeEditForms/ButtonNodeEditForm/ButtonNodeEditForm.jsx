import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { produce } from 'immer'
import _ from 'lodash'
import { memo, useState } from 'react'
import { BUTTON_VARIANTS } from '../../../schemaGenerator/types/buttonVariants'
import { ColorPickerDropdown } from '../../customDropdowns/ColorPickerDropdown'
import { getColorPickerDropdownValueFromColorStructure } from '../../customDropdowns/ColorPickerDropdown/core/functions'
import FontPickerDropdown from '../../customDropdowns/FontPickerDropdown/FontPickerDropdown'
import ButtonNodeInWebsiteBuilder from '../../ReactFlowNodes/ButtonNode/ButtonNodeInReactFlow'
import { renderMode } from '../../../../../constants/renderMode'
import Disable from '../../../../../components/Disable/Disable'
import FontSizeChangeCounter from '../../../../../components/FontSizeChangeCounter/FontSizeChangeCounter'
import PagesDropdown from '../../customDropdowns/PagesDropdown/PagesDropdown'
import FileUploadAny from '../../FileUploads/FileUploadAny'
import { redirect } from 'react-router-dom'
import { toast } from '../../../../../customLibraries/MyReactToastify/toast'
import { getPageById } from '../../../../../core/utilFunctions'
import { getItemById } from '../../../../../utils/functions'
import { store } from '../../../../../store/store'
import { websiteBuilderPagesSelector } from '../../../redux/websiteBuilderSlice'
import ButtonActionsSelect from './ButtonActions/ButtonActionsSelect'
import ButtonActionForm from './ButtonActions/ButtonActionForm'
import { BUTTON_ACTION_TYPE_TO_FUNCTION_MAP } from './ButtonActions/constants/buttonActionTypeToFunctionMap'
import ButtonActions from './ButtonActions/ButtonActions'
import DeleteNodeButton from '../../DeleteNodeButton/DeleteNodeButton'
import { formInputRowSpacing } from '../constants/formInputRowSpacing'

// take data object as input and shows it in the form
// when form value changes it calls the onChange callback function with new values
const ButtonNodeEditForm = memo(function ButtonNodeEditForm({
  id,
  onDeleteNode,
  data = {},
  onChange,
  websiteBuilderState,
}) {
  const handleFormChange = (changedValues) => {
    /* lodash merge function changes the original object that's why we need to create a 
    draftState to merge changedValues with it */
    const newDataObj = produce(data, (draftState) => {
      return _.merge(draftState, changedValues)
    })
    // calling the props.onChange callback function with new values
    onChange(newDataObj)
  }

  const outlinedButtonDataObj = produce(data, (draft) => {
    draft.buttonText = 'Outlined'
    draft.styles.variant = BUTTON_VARIANTS.OUTLINED
    draft.styles.fontSize = 15
  })
  const containedButtonDataObj = produce(data, (draft) => {
    draft.buttonText = 'Contained'
    draft.styles.variant = BUTTON_VARIANTS.CONTAINED
    draft.styles.fontSize = 15
  })

  return (
    // default submit is prevented because pressing enter key submits the form
    <Grid container spacing={formInputRowSpacing}>
      <Grid item xs={12}>
        <DeleteNodeButton id={id} onDeleteNode={onDeleteNode} />
      </Grid>
      <Grid container item xs={12} alignItems={'center'} gap={2}>
        <Grid item xs="auto">
          Variant:
        </Grid>
        <Grid item xs>
          <ToggleButtonGroup
            sx={{
              '> .Mui-selected': {
                backgroundColor: 'transparent !important',
                outline: '2px solid dodgerblue',
              },
              '> .MuiButtonBase-root:hover': {
                backgroundColor: 'transparent !important',
                outline: '2px solid dodgerblue',
              },
            }}
            value={data.styles.variant}
            exclusive
            onChange={(e, value) => {
              if (value !== null) {
                handleFormChange({ styles: { variant: value } })
              }
            }}
            fullWidth
          >
            <ToggleButton value={BUTTON_VARIANTS.OUTLINED}>
              <ButtonNodeInWebsiteBuilder
                data={outlinedButtonDataObj}
                mode={renderMode.editor}
                project={websiteBuilderState}
              />
            </ToggleButton>
            <ToggleButton value={BUTTON_VARIANTS.CONTAINED}>
              {/* <Disable> */}
              <ButtonNodeInWebsiteBuilder
                data={containedButtonDataObj}
                mode={renderMode.editor}
                project={websiteBuilderState}
              />
              {/* </Disable> */}
              {/* <Typography textTransform={'none'}>Contained</Typography> */}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="text"
          value={data.buttonText}
          onChange={(e) => handleFormChange({ buttonText: e.target.value })}
          label="Button Text"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <FontPickerDropdown
          value={data.styles.fontFamily.value}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <FontSizeChangeCounter
          inputId={'font-size-counter-buttonNode'}
          value={data.styles.fontSize}
          onChange={(fontSizeObj) => handleFormChange({ styles: fontSizeObj })}
        />
      </Grid>
      <Grid item xs={12}>
        <ColorPickerDropdown
          dropdownLabel="Text Color"
          value={getColorPickerDropdownValueFromColorStructure(
            data.styles.textColor
          )}
          customColor={data.styles.textColor.value}
          onChange={(changeObj) =>
            handleFormChange({
              styles: { textColor: changeObj },
            })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <ColorPickerDropdown
          dropdownLabel="Button Color"
          value={getColorPickerDropdownValueFromColorStructure(
            data.styles.buttonColor
          )}
          customColor={data.styles.buttonColor.value}
          onChange={(changeObj) =>
            handleFormChange({
              styles: {
                buttonColor: changeObj,
              },
            })
          }
        />
      </Grid>
      <Grid container item xs={12} spacing={2} alignItems="center">
        <ButtonActions
          buttonActionType={data.action.buttonActionType}
          buttonActionValue={data.action.buttonActionValue}
          onChange={(changeObj) => handleFormChange({ action: changeObj })}
        />
      </Grid>
    </Grid>
  )
})

export default ButtonNodeEditForm
