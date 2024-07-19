import { Box, styled } from '@mui/material'
import { produce } from 'immer'
import { forwardRef, useRef } from 'react'
import { Rnd } from 'react-rnd'
import Disable from '../../../../components/Disable/Disable'
import { renderMode } from '../../../../constants'
import { nodeResizingMap } from '../../constants'

const WebsiteBuilderCanvas = forwardRef(function WebsiteBuilderCanvas(
  { nodes, nodeTypes, onNodesChange },
  ref
) {
  const selectedItems = useRef([])

  return (
    <Box
      ref={ref}
      onClick={() => {
        onNodesChange(
          selectedItems.current.map((v) => {
            return produce(v, (draftState) => {
              draftState.selected = false
            })
          })
        )
        selectedItems.current = []
      }}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: 1000,
          margin: 'auto',
          height: 1000,
        }}
      >
        {nodes.map((node) => {
          const Comp = nodeTypes[node.type]
          const enableResizing = nodeResizingMap[node.type] ?? true
          return (
            <Box
              onClick={(e) => e.stopPropagation()}
              onMouseDown={() => {
                if (!node.selected) {
                  const newSelectedItemsArray = produce(
                    selectedItems.current,
                    (draftState) => {
                      draftState.forEach((v) => {
                        v.selected = false
                      })
                      draftState.push({
                        type: 'select',
                        id: node.id,
                        selected: true,
                      })
                    }
                  )
                  onNodesChange(newSelectedItemsArray)
                  selectedItems.current = [
                    {
                      type: 'select',
                      id: node.id,
                      selected: true,
                    },
                  ]
                }
              }}
              key={node.id}
              sx={{
                position: 'absolute',
              }}
            >
              <StyledRnd
                selected={node.selected}
                enableResizing={!!node.selected && enableResizing}
                size={{ width: node.width, height: node.height }}
                onResizeStop={(a, b, c, { width, height }, { x, y }) => {
                  onNodesChange([
                    {
                      id: node.id,
                      type: 'position',
                      position: { x, y },
                      dragging: false,
                    },
                    {
                      id: node.id,
                      type: 'resize',
                      widthChange: width,
                      heightChange: height,
                      dragging: true,
                    },
                  ])
                }}
                position={{ x: node.position.x, y: node.position.y }}
                onDragStop={(e, { x, y }) => {
                  onNodesChange([
                    {
                      id: node.id,
                      type: 'position',
                      position: { x, y },
                      dragging: true,
                    },
                  ])
                }}
                resizeHandleClasses={{
                  bottom: 'resize-handler resize-handler-bottom',
                  bottomLeft: 'resize-handler resize-handler-bottom-left',
                  bottomRight: 'resize-handler resize-handler-bottom-right',
                  left: 'resize-handler resize-handler-left',
                  right: 'resize-handler resize-handler-right',
                  top: 'resize-handler resize-handler-top',
                  topLeft: 'resize-handler resize-handler-top-left',
                  topRight: 'resize-handler resize-handler-top-right',
                }}
              >
                <Disable>
                  <Comp {...node} mode={renderMode.editor} />
                </Disable>
              </StyledRnd>
            </Box>
          )
        })}
      </div>
    </Box>
  )
})

export default WebsiteBuilderCanvas

const StyledRnd = styled(Rnd)((props) => () => {
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
