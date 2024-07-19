import { Box } from '@mui/material'
import { useDragAndMove } from '../../hooks/useDragAndMove/useDragAndMove'

const DragAndMove = ({ children, dragItemPosition, onDrag }) => {
  const { dragItemRef, dragItemProps } = useDragAndMove({
    dragItemPosition,
    onDrag,
  })
  return (
    <Box ref={dragItemRef} {...dragItemProps}>
      {children}
    </Box>
  )
}

export default DragAndMove
