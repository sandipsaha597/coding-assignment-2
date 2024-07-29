import { Box } from '@mui/material'
import Canvas from '../../../../components/Canvas/Canvas'
import NodesRenderer from '../../../../components/NodeRenderer/NodeRenderer'
import GlobalStyleWrapper from '../../../shared/components/containers/GlobalStyleWrapper'
import { WebsiteBuilderNavbar } from '../../../shared/components/WebsiteBuilderNavbar/WebsiteBuilderNavbar'
import { nodeResizingMap } from '../../constants'
import { useWebsiteBuilder } from '../../hooks/useWebsiteBuilder/useWebsiteBuilder'
import PreviewAndWebsiteBuilderCanvasContainer from '../../../shared/components/containers/PreviewAndWebsiteBuilderCanvasContainer'
import { renderMode } from '../../../shared/constants/renderMode'
import { nodeTypeWebsiteBuilderComponentMap } from '../../../shared/constants/nodeTypeWebsiteBuilderComponentMap'

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
          {/* Anything that needs to be full-width goes outside the container. Like Navbar, 
          background-image etc */}
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

export default WebsiteBuilderCanvas
