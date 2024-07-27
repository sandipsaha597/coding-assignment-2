import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material'
import ColorPicker from '../../../../components/ColorPicker/ColorPicker'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useProjectThemeAndGlobalStyle } from '../../hooks/useProjectThemeAndGlobalStyles/useProjectThemeAndGlobalStyles'

const ThemeAccordion = () => {
  const { themeAndGlobalStyles, changeThemeColor } =
    useProjectThemeAndGlobalStyle()
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>Theme</AccordionSummary>
      <AccordionDetails>
        <Grid container rowSpacing={2}>
          {themeAndGlobalStyles.theme.map((v) => {
            return (
              <Grid
                container
                item
                key={v.id}
                alignItems={'center'}
                columnSpacing={2}
              >
                <Grid item xs="auto">
                  <ColorPicker
                    color={v.color}
                    onChange={({ hexa }) => changeThemeColor(v.id, hexa)}
                  />
                </Grid>
                <Grid item xs>
                  <Typography>{v.name}</Typography>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default ThemeAccordion
