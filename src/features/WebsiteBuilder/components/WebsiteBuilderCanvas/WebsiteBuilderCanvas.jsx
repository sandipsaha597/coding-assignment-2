import { Box } from '@mui/material'
import { forwardRef } from 'react'
import Canvas from '../../../../components/Canvas/Canvas'
import NodesRenderer from '../../../../components/NodeRenderer/NodeRenderer'
import PreviewAndWebsiteBuilderCanvasContainer from '../../../../components/PreviewAndWebsiteBuilderCanvasContainer/PreviewAndWebsiteBuilderCanvasContainer'
import { WebsiteBuilderNavbar } from '../../../../components/WebsiteBuilderNavbar/WebsiteBuilderNavbar'
import { renderMode } from '../../../../constants'

// const nodeRelativePositionTypeMap = {
//   INSIDE_CONTAINER: 'INSIDE_CONTAINER',
//   OUTSIDE_CONTAINER: 'OUTSIDE_CONTAINER'
// }

const WebsiteBuilderCanvas = forwardRef(function WebsiteBuilderCanvas(
  props,
  ref
) {
  const { navbar, pages } = props

  return (
    <Canvas ref={ref} height={1000} {...props}>
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
})

export default WebsiteBuilderCanvas
