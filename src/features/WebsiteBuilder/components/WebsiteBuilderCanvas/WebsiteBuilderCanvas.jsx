import { Box } from '@mui/material'
import Canvas from '../../../../components/Canvas/Canvas'
import NodesRenderer from '../../../../components/NodeRenderer/NodeRenderer'
import PreviewAndWebsiteBuilderCanvasContainer from '../../../../components/PreviewAndWebsiteBuilderCanvasContainer/PreviewAndWebsiteBuilderCanvasContainer'
import { WebsiteBuilderNavbar } from '../../../shared/components/WebsiteBuilderNavbar/WebsiteBuilderNavbar'
import { useWebsiteBuilder } from '../../hooks/useWebsiteBuilder/useWebsiteBuilder'
import { nodeResizingMap } from '../../constants'
import { useProjectThemeAndGlobalStyle } from '../../hooks/useProjectThemeAndGlobalStyles/useProjectThemeAndGlobalStyles'
import { nodeTypeWebsiteBuilderComponentMap } from '../../../../constants/nodeTypeWebsiteBuilderComponentMap'
import { renderMode } from '../../../../constants/renderMode'
import Disable from '../../../../components/Disable/Disable'

// const nodeRelativePositionTypeMap = {
//   INSIDE_CONTAINER: 'INSIDE_CONTAINER',
//   OUTSIDE_CONTAINER: 'OUTSIDE_CONTAINER'
// }

const WebsiteBuilderCanvas = () => {
  const {
    nodes,
    websiteBuilderRef,
    onNodeSelect,
    updateNodeSize,
    updateNodePosition,
    navbar,
    pages,
    websiteBuilderState,
  } = useWebsiteBuilder()

  return (
    <Canvas
      ref={websiteBuilderRef}
      project={websiteBuilderState}
      navbar={navbar}
      pages={pages}
      nodes={nodes}
      onNodeSelect={onNodeSelect}
      onNodeResizeStop={updateNodeSize}
      onNodeDragStop={updateNodePosition}
      nodeTypes={nodeTypeWebsiteBuilderComponentMap}
      nodeResize={nodeResizingMap}
    >
      {(canvasProps) => (
        <GlobalStyleWrapper project={websiteBuilderState}>
          <Box sx={{ pointerEvents: 'none' }}>
            <WebsiteBuilderNavbar
              navbar={navbar}
              pages={pages}
              project={websiteBuilderState}
              mode={renderMode.editor}
            />
          </Box>
          <PreviewAndWebsiteBuilderCanvasContainer height={1000}>
            <NodesRenderer {...canvasProps} />
          </PreviewAndWebsiteBuilderCanvasContainer>
        </GlobalStyleWrapper>
      )}
    </Canvas>
  )
}

const GlobalStyleWrapper = ({ project, children }) => {
  // const { globalStyles } = project.themeAndGlobalStyles
  return (
    <Box
      sx={
        {
          // fontFamily: globalStyles.fontFamily,
          // color: globalStyles.color,
          // backgroundColor: globalStyles.backgroundColor,
        }
      }
    >
      {children}
    </Box>
  )
}

export default WebsiteBuilderCanvas
