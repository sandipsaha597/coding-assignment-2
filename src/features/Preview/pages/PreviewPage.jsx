import { Box } from '@mui/material'
import { useEffect } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import PreviewAndWebsiteBuilderCanvasContainer from '../../../components/PreviewAndWebsiteBuilderCanvasContainer/PreviewAndWebsiteBuilderCanvasContainer'
import { getProjectOrTemplateById } from '../../../core/utilFunctions'
import { WebsiteBuilderNavbar } from '../../../components/WebsiteBuilderNavbar/WebsiteBuilderNavbar'
import { nodeTypeWebsiteBuilderComponentMap } from '../../../constants/nodeTypeWebsiteBuilderComponentMap'
import { renderMode } from '../../../constants/renderMode'

const PageView = ({ page, project }) => {
  useEffect(() => {
    // a better option is to use react-helmet or similar library
    document.title = page.pageDetails.title
  }, [page])
  const nodes = page.nodes

  return (
    <PreviewAndWebsiteBuilderCanvasContainer height={1000}>
      {nodes.map((node) => {
        const Comp = nodeTypeWebsiteBuilderComponentMap[node.type]
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
            <Comp {...node} project={project} mode={renderMode.previewOrLive} />
          </Box>
        )
      })}
    </PreviewAndWebsiteBuilderCanvasContainer>
  )
}

const Preview = ({ view }) => {
  const pages = view.pages
  const navbar = view.navbar
  return (
    <div>
      <WebsiteBuilderNavbar
        navbar={navbar}
        pages={pages}
        project={view}
        mode={renderMode.previewOrLive}
      />
      <Routes>
        {pages.map((page) => {
          return (
            <Route
              key={page.id}
              path={page.pageDetails.slug}
              element={<PageView page={page} project={view} />}
            />
          )
        })}
      </Routes>
    </div>
  )
}

const PreviewPage = () => {
  const { projectOrTemplateId } = useParams()
  const [view] = getProjectOrTemplateById(projectOrTemplateId)

  if (!view) return <h1>Invalid id</h1>

  return <Preview view={view} />
}

export default PreviewPage
