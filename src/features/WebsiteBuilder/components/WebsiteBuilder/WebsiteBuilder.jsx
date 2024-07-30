import { Box, styled } from '@mui/material'
import { GoogleFontLoader } from '../../../../customLibraries/GoogleFontLoader'
import { availableFonts } from '../../../shared/constants/availableFonts'
import { memo } from 'react'
import Header from '../Header/Header'
import WebsiteBuilderCanvas from '../WebsiteBuilderCanvas/WebsiteBuilderCanvas'
import PagesAndAddPages from '../AddPage/PagesAndAddPages'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import NodesPanel from '../NodesPanel/NodesPanel'
import { zIndexManagement } from '../../../shared/constants/zIndexManagement'

const WebsiteBuilder = memo(function WebsiteBuilder() {
  return (
    <StyledWebsiteBuilder>
      <GoogleFontLoader fonts={availableFonts} />
      {/* header of the app */}
      <Header />
      <WebsiteBuilderCanvasWrapper>
        <Box bgcolor={'#fff'}>
          <WebsiteBuilderCanvas />
        </Box>
        <PagesAndAddPagesWrapper>
          <PagesAndAddPages />
        </PagesAndAddPagesWrapper>
      </WebsiteBuilderCanvasWrapper>
      <RightSidePanel>
        <PropertiesPanel />
        <NodesPanel />
      </RightSidePanel>
    </StyledWebsiteBuilder>
  )
})

const StyledWebsiteBuilder = styled('div')(() => ({
  display: 'grid',
  height: '100vh',
  gridTemplateRows: '55px 1fr',
  gridTemplateAreas: `
    'header header'
    'website-builder-canvas right-side-panel'
    `,
  overflow: 'hidden',
  gridTemplateColumns: `1fr 0.3fr`,
  // [theme.breakpoints.up('md')]: {
  //   gridTemplateColumns: `1fr ${rightSidePanelWidth.md}`,
  // },
  // [theme.breakpoints.up('lg')]: {
  //   gridTemplateColumns: `1fr ${rightSidePanelWidth.lg}`,
  // },
}))

export default WebsiteBuilder

const WebsiteBuilderCanvasWrapper = styled('main')({
  gridArea: 'website-builder-canvas',
  overflowY: 'scroll',
  overflowX: 'hidden',
  background: '#f3f3f3',
})

const RightSidePanel = styled('aside')(({ theme }) => ({
  border: '1px solid #d8d8d8',
  borderRight: 'none',
  borderBottom: 'none',
  display: 'grid',
  gridArea: 'right-side-panel',
  overflow: 'hidden',
  position: 'relative',
  paddingBottom: theme.spacing(4),
}))

const PagesAndAddPagesWrapper = styled('div')(({ theme }) => ({
  position: 'sticky',
  bottom: 0,
  margin: 'auto',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  width: '92%',
  zIndex: zIndexManagement.pagesAndAddPages,
  pointerEvents: 'none',
}))
