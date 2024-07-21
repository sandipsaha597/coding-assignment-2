import { Box } from '@mui/material'

const PreviewAndWebsiteBuilderCanvasContainer = ({ height, children }) => {
  return (
    <Box
      id="preview-and-website-builder-canvas-container"
      sx={{
        position: 'relative',
        maxWidth: 1000,
        margin: 'auto',
        height,
      }}
    >
      {children}
    </Box>
  )
}

export default PreviewAndWebsiteBuilderCanvasContainer
