import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from '@mui/material'
import { produce } from 'immer'
import _ from 'lodash'
import ColorPickerWithLabel from '../../../../components/ColorPicker/ColorPickerWithLabel'
import { useProjectThemeAndGlobalStyle } from '../../hooks/useProjectThemeAndGlobalStyles/useProjectThemeAndGlobalStyles'
import { getFontFamily } from '../../schemaGenerator/valueGetters/getFontFamily'
import FontPickerDropdown from '../customDropdowns/FontPickerDropdown/FontPickerDropdown'

const GlobalStylesAccordion = () => {
  const { themeAndGlobalStyles, changeGlobalStyle } =
    useProjectThemeAndGlobalStyle()
  const globalStyles = themeAndGlobalStyles.globalStyles

  const handleFontChange = (changedValues) => {
    console.log('changedValues', changedValues)
    /* lodash merge function changes the original object that's why we need to create a 
    draftState to merge changedValues with it */
    const newDataObj = produce(globalStyles.fontFamily, (draftState) => {
      return _.merge(draftState, changedValues.styles.fontFamily)
    })
    console.log('newDataObj', newDataObj, globalStyles.fontFamily)

    // debugger
    // calling the props.onChange callback function with new values
    changeGlobalStyle('fontFamily', newDataObj)
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Global Styles
      </AccordionSummary>
      <AccordionDetails>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <FontPickerDropdown
              showGlobal={false}
              label="Global Font"
              value={globalStyles.fontFamily.value}
              onChange={handleFontChange}
            />
          </Grid>
          <Grid item xs={12}>
            <ColorPickerWithLabel
              label={'Color'}
              onChange={({ hexa }) => changeGlobalStyle('color', hexa)}
              color={globalStyles.color}
            />
          </Grid>
          <Grid item xs={12}>
            <ColorPickerWithLabel
              label={'Background Color'}
              onChange={({ hexa }) =>
                changeGlobalStyle('backgroundColor', hexa)
              }
              color={globalStyles.backgroundColor}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default GlobalStylesAccordion
