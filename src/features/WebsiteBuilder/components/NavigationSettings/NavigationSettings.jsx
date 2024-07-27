import ExpandMoreIconMUI from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import NavigationStylesAccordion from './NavigationStylesAccordion/NavigationStylesAccordion'
import NavbarItemsAndLinksAccordion from './NavbarItemsAndLinksAccordion/NavbarItemsAndLinksAccordion'
import PagesDetailsAccordion from './PagesDetailsAccordion/PagesDetailsAccordion'
// import { detectDuplicateSlug } from '../../../../core/utilFunctions'

const NavigationSettings = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIconMUI />}
        id="navigation control"
      >
        Navigation control
      </AccordionSummary>
      <AccordionDetails>
        <NavigationStylesAccordion />
        <NavbarItemsAndLinksAccordion />
        <PagesDetailsAccordion />
      </AccordionDetails>
    </Accordion>
  )
}

export default NavigationSettings
