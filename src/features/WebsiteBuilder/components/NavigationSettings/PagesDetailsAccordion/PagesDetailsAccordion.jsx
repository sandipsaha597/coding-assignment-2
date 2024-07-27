import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIconMUI from '@mui/icons-material/ExpandMore'
import PagesDetailsEditForm from './PagesDetailsEditForm'

const PagesDetailsAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIconMUI />}>
        Pages
      </AccordionSummary>
      <AccordionDetails>
        <PagesDetailsEditForm />
      </AccordionDetails>
    </Accordion>
  )
}

export default PagesDetailsAccordion
