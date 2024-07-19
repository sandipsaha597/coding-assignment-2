import { Box, styled } from '@mui/material'
import { NODE_TYPE_REACT_FLOW_COMPONENT_MAP } from '../../../constants'
import Header from '../components/Header/Header'
import NodesPanel from '../components/NodesPanel/NodesPanel'
import SettingsPanel from '../components/SettingsPanel/SettingsPanel'
import WebsiteBuilderCanvas from '../components/WebsiteBuilderCanvas/WebsiteBuilderCanvas'
import { rightSidePanelWidth } from '../constants'
import { useWebsiteBuilder } from '../hooks/useWebsiteBuilder/useWebsiteBuilder.js'
import WebsiteBuilderProvider from '../context/WebsiteBuilderProvider.jsx'
import PagesAndAddPages from '../components/AddPage/PagesAndAddPages.jsx'

function WebsiteBuilder() {
  // useChatbotFlowBuilder contains all the functionalities, states, context and methods related to chatbotFlow
  const {
    nodes,
    websiteBuilderRef,
    setChatbotReactFlowInstance,
    onNodesChange,
  } = useWebsiteBuilder()

  return (
    <ChatbotFlowBuilder>
      {/* header of the app */}
      <Header />
      <ReactFlowWrapper>
        <Box sx={{ marginBottom: '100px' }}>
          <WebsiteBuilderCanvas
            ref={websiteBuilderRef}
            nodes={nodes}
            onNodesChange={(changes) => {
              onNodesChange(changes)
            }}
            nodeTypes={NODE_TYPE_REACT_FLOW_COMPONENT_MAP}
            onInit={setChatbotReactFlowInstance}
          />
        </Box>
        <Box
          sx={{
            position: 'sticky',
            bottom: '20px',
            margin: 'auto',
            width: '92%',
          }}
        >
          <PagesAndAddPages />
        </Box>
      </ReactFlowWrapper>
      <RightSidePanel>
        <SettingsPanel />
        <NodesPanel />
      </RightSidePanel>
    </ChatbotFlowBuilder>
  )
}

const WebsiteBuilderPage = () => {
  return (
    <WebsiteBuilderProvider>
      <WebsiteBuilder />
    </WebsiteBuilderProvider>
  )
}

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
  overflowY: 'auto',
})

const RightSidePanel = styled('aside')({
  border: '1px solid #d8d8d8',
  borderRight: 'none',
  borderBottom: 'none',
  display: 'grid',
  gridArea: 'right-side-panel',
  overflow: 'hidden',
  position: 'relative',
})
