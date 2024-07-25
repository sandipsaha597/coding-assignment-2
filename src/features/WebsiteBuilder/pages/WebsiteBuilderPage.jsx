import { Box, styled } from '@mui/material'
import { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GoogleFontLoader } from '../../../customLibraries/GoogleFontLoader/index.js'

import { availableFonts } from '../../../constants.js'
import PagesAndAddPages from '../components/AddPage/PagesAndAddPages.jsx'
import Header from '../components/Header/Header'
import NodesPanel from '../components/NodesPanel/NodesPanel'
import SettingsPanel from '../components/SettingsPanel/SettingsPanel'
import WebsiteBuilderCanvas from '../components/WebsiteBuilderCanvas/WebsiteBuilderCanvas'
import { rightSidePanelWidth, zIndexManagement } from '../constants'
import WebsiteBuilderProvider from '../context/WebsiteBuilderProvider.jsx'
import { useAutoUpdateProject } from '../hooks/useAutoUpdateProject/useAutoUpdateProject.js'
import { useProject } from '../hooks/useProject/useProject.js'

const WebsiteBuilder = memo(function WebsiteBuilder() {
  return (
    <ChatbotFlowBuilder>
      <GoogleFontLoader fonts={availableFonts} />
      {/* header of the app */}
      <Header />
      <ReactFlowWrapper>
        <Box bgcolor={'#fff'}>
          <WebsiteBuilderCanvas />
        </Box>
        <PagesAndAddPagesWrapper>
          <PagesAndAddPages />
        </PagesAndAddPagesWrapper>
      </ReactFlowWrapper>
      <RightSidePanel>
        <SettingsPanel />
        <NodesPanel />
      </RightSidePanel>
    </ChatbotFlowBuilder>
  )
})

const WebsiteBuilderPage = memo(function WebsiteBuilderPage() {
  // useWebsiteBuilder contains all the functionalities, states, context and
  // methods related to website builder part
  const { setProject } = useProject()
  const params = useParams()

  useAutoUpdateProject()

  useEffect(() => {
    setProject(params.projectId)
  }, [params.projectId, setProject])

  return (
    <WebsiteBuilderProvider>
      <WebsiteBuilder />
    </WebsiteBuilderProvider>
  )
})

export default WebsiteBuilderPage

const ChatbotFlowBuilder = styled('div')(({ theme }) => ({
  display: 'grid',
  height: '100vh',
  gridTemplateRows: '45px 1fr',
  gridTemplateAreas: `
    'header header'
    'react-flow right-side-panel'
    `,
  overflow: 'hidden',
  gridTemplateColumns: `1fr ${rightSidePanelWidth.sm}`,
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: `1fr ${rightSidePanelWidth.md}`,
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: `1fr ${rightSidePanelWidth.lg}`,
  },
}))

const ReactFlowWrapper = styled('main')({
  gridArea: 'react-flow',
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
