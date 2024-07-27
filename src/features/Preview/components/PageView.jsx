import { useEffect } from 'react'
import { nodeTypeWebsiteBuilderComponentMap } from '../../../constants/nodeTypeWebsiteBuilderComponentMap'
import { Box } from '@mui/material'
import { renderMode } from '../../../constants/renderMode'
import PreviewAndWebsiteBuilderCanvasContainer from '../../shared/components/containers/PreviewAndWebsiteBuilderCanvasContainer'

const PageView = ({ page, project }) => {
  // de
  useEffect(() => {
    // a better option is to use react-helmet or similar library
    document.title = page.pageDetails.title
  }, [page])
  const nodes = page.nodes
  return (
    <PreviewAndWebsiteBuilderCanvasContainer height={1000}>
      {nodes.map((node) => {
        const NodeComponent = nodeTypeWebsiteBuilderComponentMap[node.type]
        return (
          <Box
            key={node.id}
            sx={{
              position: 'absolute',
              width: node.width,
              height: node.height,
              left: node.position.x,
              top: node.position.y,
            }}
          >
            <NodeComponent
              {...node}
              project={project}
              mode={renderMode.previewOrLive}
            />
          </Box>
        )
      })}
    </PreviewAndWebsiteBuilderCanvasContainer>
  )
}

export default PageView
