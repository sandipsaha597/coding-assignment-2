import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  styled,
  Typography,
} from '@mui/material'
import NavigationSettings from '../NavigationSettings/NavigationSettings'
import NodesInPanelList from './NodesInPanelList'

// const styles = {
//   background: 'red',
//   itemColor: 'white',
//   activeItemColor: 'green',
//   gap: '10px',
//   margin: 'auto',
// }

const NodesPanel = () => {
  return (
    <StyledNodesPanel>
      <NodesInPanelList />
      <NavigationSettings />
      <ThemesAndGlobalStyles />
    </StyledNodesPanel>
  )
}

export default NodesPanel

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ColoredBox } from '../../../../components/ColoredBox/ColoredBox'
import ColorPicker from '../../../../components/ColorPicker/ColorPicker'
import { useProjectThemeAndGlobalStyle } from '../../hooks/useProjectThemeAndGlobalStyles/useProjectThemeAndGlobalStyles'

const ThemesAndGlobalStyles = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="navigation control">
        Theme and Global Styles
      </AccordionSummary>
      <AccordionDetails>
        <ThemeAccordion />
      </AccordionDetails>
    </Accordion>
  )
}

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

// const GlobalStylesAccordion = () => {
//   const { themeAndGlobalStyles } = useProjectThemeAndGlobalStyle()
//   return (
//     <Accordion>
//       <AccordionSummary expandIcon={<ExpandMoreIcon />}>Theme</AccordionSummary>
//       <AccordionDetails>
//         {themeAndGlobalStyles.theme.map((v) => {
//           return (
//             <Grid container key={v.id}>
//               <Grid item xs="auto">
//                 <ColorPicker color={v.color} />
//               </Grid>
//               <Grid item xs>
//                 <Typography>{v.name}</Typography>
//               </Grid>
//             </Grid>
//           )
//         })}
//       </AccordionDetails>
//     </Accordion>
//   )
// }

const StyledNodesPanel = styled('section')({
  padding: '10px',
  overflowY: 'scroll',
  height: '100%',
})
