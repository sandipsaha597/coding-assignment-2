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
      onClick={(e) => {
        console.log('click', e)
        onNodeSelect(false)
      }}
      sx={{ width, height }}
    >
      {children ? children(props) : <NodesRenderer {...props} />}
    </Box>
  )
})

export default Canvas
