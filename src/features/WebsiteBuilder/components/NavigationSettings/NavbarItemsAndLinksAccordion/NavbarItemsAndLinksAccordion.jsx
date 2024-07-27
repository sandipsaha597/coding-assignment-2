import ExpandMoreIconMUI from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import NavbarItemAndLinksEditForm from './NavbarItemAndLinksEditForm'

const NavbarItemsAndLinksAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIconMUI />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        Menu items and links
      </AccordionSummary>
      <AccordionDetails>
        <NavbarItemAndLinksEditForm />
      </AccordionDetails>
    </Accordion>
  )
}

export default NavbarItemsAndLinksAccordion
