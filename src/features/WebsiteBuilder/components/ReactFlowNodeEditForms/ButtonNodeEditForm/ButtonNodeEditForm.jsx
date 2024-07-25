import {
  Box,
  Grid,
  InputLabel,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { produce } from 'immer'
import _ from 'lodash'
import { memo } from 'react'
import ColorPickerDropdown from '../../../../../components/ColorPickerDropdown/components/ColorPickerDropdown'
import FontPickerDropdown from '../../../../../components/FontPickerDropdown/FontPickerDropdown'
import { BUTTON_VARIANTS } from '../../NodesPanel/constants'
import { getColorPickerDropdownValueFromColorStructure } from '../../../../../components/ColorPickerDropdown/core/functions'

// take data object as input and shows it in the form
// when form value changes it calls the onChange callback function with new values
const ButtonNodeEditForm = memo(function ButtonNodeEditForm({
  data = {},
  onChange,
}) {
  // const handleFormChange = (key, value) => {
  //   const values = {
  //     ...data,
  //     [key]: value,
  //   }
  //   // calling the props.onChange callback function with new values
  //   onChange(values)
  // }

  const handleFormChange = (changedValues) => {
    /* lodash merge function changes the original object that's why we need to create a 
    draftState to merge changedValues with it */
    const newDataObj = produce(data, (draftState) => {
      return _.merge(draftState, changedValues)
    })
    // calling the props.onChange callback function with new values

    onChange(newDataObj)
  }

  return (
    // default submit is prevented because pressing enter key submits the form
    <Grid container spacing={2}>
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
          value={data.styles.fontFamily}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InputLabel htmlFor="font-size-counter-textNode">
            Font size:
          </InputLabel>
          {/* <FontSizeChangeCounter
            inputId={'font-size-counter-buttonNode'}
            value={data.styles.fontSize}
            onChange={(fontSizeObj) =>
              handleFormChange({ styles: fontSizeObj })
            }
          /> */}
        </Box>
      </Grid>
      <Grid container item xs={12} alignItems={'center'} gap={2}>
        <Grid item xs="auto">
          Variant:
        </Grid>
        <Grid item xs>
          <ToggleButtonGroup
            value={data.styles.variant}
            exclusive
            onChange={(e, value) =>
              handleFormChange({ styles: { variant: value } })
            }
            fullWidth
          >
            <ToggleButton value={BUTTON_VARIANTS.OUTLINED}>
              <Typography textTransform={'none'}>Outlined</Typography>
            </ToggleButton>
            <ToggleButton value={BUTTON_VARIANTS.CONTAINED}>
              <Typography textTransform={'none'}>Contained</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
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
    </Grid>
  )
})

export default ButtonNodeEditForm
