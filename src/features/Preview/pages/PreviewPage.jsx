import { Box } from '@mui/material'
import { useEffect } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import PreviewAndWebsiteBuilderCanvasContainer from '../../../components/PreviewAndWebsiteBuilderCanvasContainer/PreviewAndWebsiteBuilderCanvasContainer'
import {
  nodeTypeWebsiteBuilderComponentMap,
  renderMode,
} from '../../../constants'
import { getProjectOrTemplateById } from '../../../core/utilFunctions'
import { WebsiteBuilderNavbar } from '../../../components/WebsiteBuilderNavbar/WebsiteBuilderNavbar'

const PageView = ({ page }) => {
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
            <Comp {...node} mode={renderMode.previewOrLive} />
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
      <WebsiteBuilderNavbar navbar={navbar} />
      <Routes>
        {pages.map((page) => (
          <Route
            key={page.id}
            path={page.slug}
            element={<PageView page={page} />}
          />
        ))}
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
