import { produce } from 'immer'
import { useNavbar } from '../../../hooks/useNavbar/useNavbar'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  InputLabel,
} from '@mui/material'
import { ColorPickerDropdown } from '../../customDropdowns/ColorPickerDropdown'
import { getColorPickerDropdownValueFromColorStructure } from '../../customDropdowns/ColorPickerDropdown/core/functions'
import Counter from '../../../../../components/Counter/components/Counter'
import ExpandMoreIconMUI from '@mui/icons-material/ExpandMore'
import _ from 'lodash'

const colorChangeArr = [
  {
    id: '1',
    property: 'backgroundColor',
    label: 'Background Color',
  },
  {
    id: '2',
    property: 'itemColor',
    label: 'Item Color',
  },
  {
    id: '3',
    property: 'activeItemColor',
    label: 'Active Item Color',
  },
]

const NavigationStylesAccordion = () => {
  const { navbar, updateNavbarStyles } = useNavbar()
  const navbarStyles = navbar.styles

  const handleFormChange = (styleProperty, changedValues) => {
    /* lodash merge function changes the original object that's why we need to create a 
    draftState to merge changedValues with it */
    const newDataObj = produce(navbar.styles[styleProperty], (draftState) => {
      return _.merge(draftState, changedValues)
    })
    // calling the updateNavbarStyles function with styleProperty and new values

    updateNavbarStyles(styleProperty, newDataObj)
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIconMUI />}>
        Navigation Styles
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
          <Grid container rowSpacing={2}>
            {colorChangeArr.map((v) => {
              return (
                <ColorPickerDropdown
                  key={v.id}
                  value={getColorPickerDropdownValueFromColorStructure(
                    navbarStyles[v.property]
                  )}
                  dropdownLabel={v.label}
                  customColor={navbarStyles[v.property].value}
                  onChange={(changeObj) =>
                    handleFormChange(v.property, changeObj)
                  }
                />
                // <ColorPickerWithLabel
                //   key={v.id}
                //   color={navbarStyles[v.property]}
                //   label={v.label}
                // />
              )
            })}
          </Grid>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputLabel htmlFor="navbar-items-gap-counter">Gap:</InputLabel>
            <Counter
              inputId={'navbar-items-gap-counter'}
              min={0}
              value={Number(
                navbarStyles['gap'].slice(0, navbarStyles['gap'].length - 2)
              )}
              onChange={(value) => updateNavbarStyles('gap', value + 'px')}
            />
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default NavigationStylesAccordion
