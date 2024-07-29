import { Box, Grid, TextField } from '@mui/material'
import { produce } from 'immer'
import _ from 'lodash'
import { memo } from 'react'
import FontSizeChangeCounter from '../../../../../components/FontSizeChangeCounter/FontSizeChangeCounter'
import { ColorPickerDropdown } from '../../customDropdowns/ColorPickerDropdown'
import { getColorPickerDropdownValueFromColorStructure } from '../../customDropdowns/ColorPickerDropdown/core/functions'
import FontPickerDropdown from '../../customDropdowns/FontPickerDropdown/FontPickerDropdown'
import DeleteNodeButton from '../../DeleteNodeButton/DeleteNodeButton'
import { formInputRowSpacing } from '../constants/formInputRowSpacing'

// take data object as input and shows it in the form
// when form value changes it calls the onChange callback function with new values

// const ColorMenuItem = ({ value, text, color }) => {

//   return (
//     <MenuItem
//       value={value}
//       // onMouseLeave={() => handleFormChange({ tempFontFamily: '' })}
//       // onMouseEnter={() =>
//       //   handleFormChange({ tempFontFamily: 'inherit' })
//       // }
//     >
//       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//         <ColoredBox color={color} />
//         <span>{text}</span>
//       </Box>
//     </MenuItem>
//   )
// }

const TextNodeEditForm = memo(function TextNodeEditForm({
  // websiteBuilderState,
  id,
  data = {},
  onChange,
  onDeleteNode,
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

  return (
    // default submit is prevented because pressing enter key submits the form
    <Grid container spacing={formInputRowSpacing}>
      <Grid item xs={12}>
        <DeleteNodeButton id={id} onDeleteNode={onDeleteNode} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="text-message"
          label="Text"
          multiline
          rows={4}
          value={data.textMessage}
          onChange={(e) => handleFormChange({ textMessage: e.target.value })}
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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* <CounterWithLabel /> */}
          <FontSizeChangeCounter
            inputId="font-size-counter-textNode"
            value={data.styles.fontSize}
            onChange={(fontSizeObj) =>
              handleFormChange({ styles: fontSizeObj })
            }
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <ColorPickerDropdown
          dropdownLabel={'Text color'}
          value={getColorPickerDropdownValueFromColorStructure(
            data.styles.color
          )}
          customColor={data.styles.color.value}
          onChange={(changeObj) => {
            handleFormChange({
              styles: { color: changeObj },
            })
          }}
        />
      </Grid>
    </Grid>
  )
})

export default TextNodeEditForm
