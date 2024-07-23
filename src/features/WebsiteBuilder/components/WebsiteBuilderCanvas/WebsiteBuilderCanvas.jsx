import { Box } from '@mui/material'
import { forwardRef } from 'react'
import Canvas from '../../../../components/Canvas/Canvas'
import NodesRenderer from '../../../../components/NodeRenderer/NodeRenderer'
import PreviewAndWebsiteBuilderCanvasContainer from '../../../../components/PreviewAndWebsiteBuilderCanvasContainer/PreviewAndWebsiteBuilderCanvasContainer'
import { WebsiteBuilderNavbar } from '../../../../components/WebsiteBuilderNavbar/WebsiteBuilderNavbar'
import {
  nodeTypeWebsiteBuilderComponentMap,
  renderMode,
} from '../../../../constants'
import { useWebsiteBuilder } from '../../hooks/useWebsiteBuilder/useWebsiteBuilder'
import { nodeResizingMap } from '../../constants'

// const nodeRelativePositionTypeMap = {
//   INSIDE_CONTAINER: 'INSIDE_CONTAINER',
//   OUTSIDE_CONTAINER: 'OUTSIDE_CONTAINER'
// }

const WebsiteBuilderCanvas = () => {
  const {
    nodes,
    websiteBuilderRef,
    setProject,
    onNodeSelect,
    updateNodeSize,
    updateNodePosition,
    navbar,
    pages,
  } = useWebsiteBuilder()

  return (
    <Canvas
      ref={websiteBuilderRef}
      height={1000}
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
        <>
          <Box sx={{ pointerEvents: 'none' }}>
            <WebsiteBuilderNavbar
              navbar={navbar}
              pages={pages}
              mode={renderMode.editor}
            />
          </Box>
          {/* </Box> */}
          <PreviewAndWebsiteBuilderCanvasContainer>
            <NodesRenderer {...canvasProps} />
          </PreviewAndWebsiteBuilderCanvasContainer>
        </>
      )}
    </Canvas>
  )
}

export default WebsiteBuilderCanvas
