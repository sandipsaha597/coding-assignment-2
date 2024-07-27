import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ThemeAccordion from './ThemeAccordion'
import GlobalStylesAccordion from './GlobalStylesAccordion'

const ThemesAndGlobalStylesAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="navigation control">
        Theme and Global Styles
      </AccordionSummary>
      <AccordionDetails>
        <ThemeAccordion />
        <GlobalStylesAccordion />
      </AccordionDetails>
    </Accordion>
  )
}

export default ThemesAndGlobalStylesAccordion
