import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  TextField,
} from '@mui/material'
import { useWebsiteBuilder } from '../../hooks/useWebsiteBuilder/useWebsiteBuilder'
import ExpandMoreIconMUI from '@mui/icons-material/ExpandMore'

const NavigationSettings = () => {
  const { navbar } = useWebsiteBuilder()
  const navbarStyles = navbar.styles
  const navbarItems = navbar.items
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIconMUI />}
        id="navigation control"
      >
        Navigation control
      </AccordionSummary>
      <AccordionDetails>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIconMUI />}>
            Navigation Styles
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
              <TextField
                type="text"
                value={navbarStyles.background}
                // onChange={(e) => handleFormChange('src', e.target.value)}
                label="Background"
                variant="outlined"
              />
              <TextField
                type="text"
                value={navbarStyles.itemColor}
                // onChange={(e) => handleFormChange('src', e.target.value)}
                label="Item color"
                variant="outlined"
              />
              <TextField
                type="text"
                value={navbarStyles.activeItemColor}
                // onChange={(e) => handleFormChange('src', e.target.value)}
                label="Active Item Color"
                variant="outlined"
              />
              <TextField
                type="text"
                value={navbarStyles.gap}
                // onChange={(e) => handleFormChange('src', e.target.value)}
                label="Gap"
                variant="outlined"
              />
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIconMUI />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Pages names and links
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
              {navbarItems.map((v) => {
                return (
                  <Box
                    key={v.id}
                    sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}
                  >
                    <TextField
                      label="Item title"
                      value={v.title}
                      size="small"
                      fullWidth
                    />
                    <TextField label="To" value={v.to} fullWidth />
                  </Box>
                )
              })}
            </Box>
          </AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
  )
}

export default NavigationSettings
