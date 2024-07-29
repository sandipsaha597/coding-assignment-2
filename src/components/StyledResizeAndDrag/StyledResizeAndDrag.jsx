import { styled } from '@mui/material'
import { ResizeAndDrag } from '../ResizeAndDrag'
import { zIndexManagement } from '../../features/shared/constants/zIndexManagement'

const resizeHandleClasses = {
  bottom: 'resize-handler resize-handler-bottom',
  bottomLeft: 'resize-handler resize-handler-bottom-left',
  bottomRight: 'resize-handler resize-handler-bottom-right',
  left: 'resize-handler resize-handler-left',
  right: 'resize-handler resize-handler-right',
  top: 'resize-handler resize-handler-top',
  topLeft: 'resize-handler resize-handler-top-left',
  topRight: 'resize-handler resize-handler-top-right',
}

const StyledResizeAndDrag = styled((props) => (
  <ResizeAndDrag resizeHandleClasses={resizeHandleClasses} {...props} />
))((props) => () => {
  const baseStyles = { border: '1px solid #000', background: '#fff' }
  const borderRadius = { borderRadius: '10px' }
  const widthTopAndBottom = { width: '100px !important' }
  const heightTopAndBottom = { height: '5px !important' }
  const widthLeftAndRight = { width: '5px !important' }
  const heightLeftAndRight = { height: '30px !important' }
  const cornersWidthAndHeight = {
    width: '10px !important',
    height: '10px !important',
  }
  return {
    outline: `2px solid ${props.selected ? '#7386bc' : 'transparent'}`,
    zIndex: `${
      props.selected ? zIndexManagement.selectedNodeInCanvas : 'auto'
    }`,
    borderRadius: '4px',
    '&:hover': {
      outline: `2px solid #7386bc`,
    },
    '.resize-handler.resize-handler-bottom': {
      ...baseStyles,
      ...widthTopAndBottom,
      ...heightTopAndBottom,
      left: '50% !important',
      transform: 'translate(-50%, -50%)',
      bottom: '-7px !important',
      ...borderRadius,
    },
    '.resize-handler.resize-handler-top': {
      ...baseStyles,
      ...widthTopAndBottom,
      ...heightTopAndBottom,
      left: '50% !important',
      transform: 'translate(-50%, 0%)',
      ...borderRadius,
      top: '-4px !important',
    },
    '.resize-handler.resize-handler-left': {
      ...baseStyles,
      ...widthLeftAndRight,
      ...heightLeftAndRight,
      top: '50% !important',
      transform: 'translate(0%, -50%)',
      ...borderRadius,
      left: '-4px !important',
    },
    '.resize-handler.resize-handler-right': {
      ...baseStyles,
      ...widthLeftAndRight,
      ...heightLeftAndRight,
      top: '50% !important',
      transform: 'translate(0%, -50%)',
      ...borderRadius,
      right: '-4px !important',
    },
    '.resize-handler.resize-handler-top-left': {
      ...baseStyles,
      ...cornersWidthAndHeight,
      top: '-7px !important',
      left: '-7px !important',
      ...borderRadius,
    },
    '.resize-handler.resize-handler-top-right': {
      ...baseStyles,
      ...cornersWidthAndHeight,
      top: '-7px !important',
      right: '-7px !important',
      ...borderRadius,
    },
    '.resize-handler.resize-handler-bottom-right': {
      ...baseStyles,
      ...cornersWidthAndHeight,
      bottom: '-7px !important',
      right: '-7px !important',
      ...borderRadius,
    },
    '.resize-handler.resize-handler-bottom-left': {
      ...baseStyles,
      ...cornersWidthAndHeight,
      bottom: '-7px !important',
      left: '-7px !important',
      ...borderRadius,
    },
    '.resize-handler:hover': {
      background: 'dodgerblue',
    },
  }
})

export default StyledResizeAndDrag
