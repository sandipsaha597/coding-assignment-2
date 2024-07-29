import { Box } from '@mui/material'
import { forwardRef } from 'react'
import NodesRenderer from '../NodeRenderer/NodeRenderer'

const Canvas = forwardRef(function Canvas(props, ref) {
  const {
    children,
    onNodeSelect,
    component = 'main',
    width = '100%',
    height = '100%',
  } = props
  return (
    <Box
      ref={ref}
      component={component}
      // If clicked on Canvas every node becomes unselected
      onClick={() => onNodeSelect(false)}
      sx={{ width, height }}
    >
      {/* using render props pattern to make it reusable for any similar feature like
      graphic design, resume design, whiteboard, flow builder etc */}
      {children ? children(props) : <NodesRenderer {...props} />}
    </Box>
  )
})

export default Canvas
