import { Box } from '@mui/material'
import Canvas from '../../../../components/Canvas/Canvas'
import NodesRenderer from '../../../../components/NodeRenderer/NodeRenderer'
import PreviewAndWebsiteBuilderCanvasContainer from '../../../../components/PreviewAndWebsiteBuilderCanvasContainer/PreviewAndWebsiteBuilderCanvasContainer'
import { WebsiteBuilderNavbar } from '../../../../components/WebsiteBuilderNavbar/WebsiteBuilderNavbar'
import { useWebsiteBuilder } from '../../hooks/useWebsiteBuilder/useWebsiteBuilder'
import { nodeResizingMap } from '../../constants'
import { useProjectThemeAndGlobalStyle } from '../../hooks/useProjectThemeAndGlobalStyles/useProjectThemeAndGlobalStyles'
import { nodeTypeWebsiteBuilderComponentMap } from '../../../../constants/nodeTypeWebsiteBuilderComponentMap'
import { renderMode } from '../../../../constants/renderMode'

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
      height={1000}
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
        <>
          <Box sx={{ pointerEvents: 'none' }}>
            <WebsiteBuilderNavbar
              navbar={navbar}
              pages={pages}
              project={websiteBuilderState}
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

const GlobalStyleWrapper = () => {
  const { themeAndGlobalStyles } = useProjectThemeAndGlobalStyle()
  const { styles } = themeAndGlobalStyles
  return (
    <Box
      sx={{
        fontFamily: styles.fontFamily,
        color: styles.color,
      }}
    ></Box>
  )
}

export default WebsiteBuilderCanvas
