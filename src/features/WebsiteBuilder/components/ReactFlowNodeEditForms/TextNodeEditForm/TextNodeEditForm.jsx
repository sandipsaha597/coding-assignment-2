import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  Paper,
  Select,
  styled,
  TextField,
} from '@mui/material'
import { memo, useEffect, useRef, useState } from 'react'
import { Counter } from '../../../../../components/Counter'
import { availableFonts } from '../../../../../constants'
import Chrome from '@uiw/react-color-chrome'
import { getItemById } from '../../../../../utils/functions'
import _ from 'lodash'
import { produce } from 'immer'
import ColorPicker from '../../../../../components/ColorPicker/ColorPicker'
import { ColoredBox } from '../../../../../components/ColoredBox/ColoredBox'

// take data object as input and shows it in the form
// when form value changes it calls the onChange callback function with new values

const ColorMenuItem = ({ color, text, value }) => {
  return (
    <MenuItem
      value={value}
      // onMouseLeave={() => handleFormChange({ tempFontFamily: '' })}
      // onMouseEnter={() =>
      //   handleFormChange({ tempFontFamily: 'inherit' })
      // }
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ColoredBox color={color} />
        <span>{text}</span>
      </Box>
    </MenuItem>
  )
}

const TextNodeEditForm = memo(function TextNodeEditForm({
  // websiteBuilderState,
  data = {},
  onChange,
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
    <Grid container spacing={2}>
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
        <FormControl fullWidth>
          <InputLabel>Select font</InputLabel>
          <Select
            value={data.styles.fontFamily || ''}
            label="Select font"
            onChange={(e) => {
              handleFormChange({
                styles: {
                  tempFontFamily: '',
                  fontFamily: e.target.value,
                },
              })
            }}
          >
            <MenuItem
              value={'inherit'}
              onMouseLeave={() =>
                handleFormChange({ styles: { tempFontFamily: '' } })
              }
              onMouseEnter={() =>
                handleFormChange({ styles: { tempFontFamily: 'inherit' } })
              }
            >
              <Box sx={{ fontFamily: 'inherit' }}>Global Font</Box>
            </MenuItem>
            {availableFonts.map(({ id, font }) => {
              return (
                <MenuItem
                  key={id}
                  value={font}
                  onMouseLeave={() => handleFormChange({ tempFontFamily: '' })}
                  onMouseEnter={() =>
                    handleFormChange({ styles: { tempFontFamily: font } })
                  }
                >
                  <Box sx={{ fontFamily: font }}>{font}</Box>
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InputLabel htmlFor="counter-input">Font size:</InputLabel>
          <FontSizeChangeCounter
            value={data.styles.fontSize}
            onChange={(fontSizeObj) =>
              handleFormChange({ styles: fontSizeObj })
            }
          />
        </Box>
      </Grid>

      <Grid container item xs={12} alignItems={'center'} spacing={2}>
        <Grid item xs>
          <FormControl fullWidth>
            <InputLabel>Color</InputLabel>
            <Select
              value={data.styles.colorType}
              label="Color"
              onChange={(e) => {
                if (
                  e.target.value === 'custom' ||
                  e.target.value === 'inherit'
                ) {
                  handleFormChange({
                    styles: {
                      colorType: e.target.value,
                      colorString: '#000',
                    },
                  })
                  return
                }
                // const [colorObj, index] = getItemById(
                //   e.target.value,
                //   websiteBuilderState.theme.colors
                // )
                // if (index === -1) {
                // console.error('Chosen theme color id does not exist')
                // return
                // } else {
                //   handleFormChange({styles: {
                //     colorType: colorObj.id,
                //   }})
                // }
              }}
            >
              <ColorMenuItem
                value={'custom'}
                color={data.styles.colorString}
                text="Custom Color"
              />
              <ColorMenuItem
                value={'inherit'}
                color={'inherit'}
                text="Global Color"
              />
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={'auto'}>
          {data.styles.colorType === 'custom' && (
            <ColorPicker
              color={data.styles.colorString}
              onChange={({ hexa }) => {
                handleFormChange({
                  styles: { colorType: 'custom', colorString: hexa },
                })
              }}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  )
})

export default TextNodeEditForm

const FontSizeChangeCounter = ({ value, onChange }) => {
  return (
    <Counter
      min={0}
      max={200}
      value={value}
      onChange={(value) => onChange({ fontSize: value })}
    />
  )
}
