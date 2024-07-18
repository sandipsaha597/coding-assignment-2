import { Box, styled } from '@mui/material'
import { produce } from 'immer'
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Rnd } from 'react-rnd'
import './App.css'
import Header from './components/Header/Header'
import NodesPanel from './components/NodesPanel/NodesPanel'
import SettingsPanel from './components/SettingsPanel/SettingsPanel'
import {
  NODE_TYPE_MAP,
  NODE_TYPE_REACT_FLOW_COMPONENT_MAP,
  renderMode,
  rightSidePanelWidth,
} from './constants'
import {
  TOAST_CONTAINER_POSITION,
  ToastContainer,
} from './customLibraries/MyReactToastify'
import useChatbotFlowBuilder from './hooks/useChatbotFlowBuilder/useChatbotFlowBuilder'

const getMousePosition = (e) => ({
  x: e.clientX,
  y: e.clientY,
})

const useDragAndMove = ({
  dragItemPosition,
  defaultDragItemPosition,
  onDrag = () => {},
  onDrop = () => false,
}) => {
  // dragItemRef: pass this to dragItem element
  const dragItemRef = useRef(null)
  const initialMousePosition = useRef({ x: null, y: null })
  // isDragging: state showing if the element is getting dragged or not
  const [isDragging, setIsDragging] = useState(false)
  // calculated draggedShadow position from viewport

  const initialDragItemPosition = useRef(
    defaultDragItemPosition ?? {
      x: null,
      y: null,
    }
  )
  const isControlled = dragItemPosition ? true : false
  const [dragItemPositionUncontrolled, setDragItemPositionUncontrolled] =
    useState(initialDragItemPosition.current)
  console.log(dragItemPosition)
  const handleOnMouseDown = useCallback((e) => {
    setIsDragging(true)
    initialDragItemPosition.current = {
      x: dragItemRef.current.offsetLeft,
      y: dragItemRef.current.offsetTop,
    }
    initialMousePosition.current = getMousePosition(e)
  }, [])

  const handleMouseMove = useCallback(
    (e) => {
      /* wrapping the updating part in requestAnimation frame gives smoother animation, 
      better performance and reduces re-renders drastically */
      requestAnimationFrame(() => {
        const currentMousePosition = getMousePosition(e)
        const calculatedNewPosition = {
          x:
            currentMousePosition.x -
            initialMousePosition.current.x +
            initialDragItemPosition.current.x,
          y:
            currentMousePosition.y -
            initialMousePosition.current.y +
            initialDragItemPosition.current.y,
        }
        if (isControlled === false) {
          setDragItemPositionUncontrolled(calculatedNewPosition)
        }
        onDrag(e, dragItemRef.current, calculatedNewPosition)
      })
    },
    [onDrag, isControlled]
  )

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return
    setIsDragging(false)
    // resets the positions for a fresh new start
  }, [isDragging])

  // dragItemProps contains onMouseDown event handler and styles to be applied in the dragItem element
  const dragItemProps = useMemo(() => {
    const xYPosition = {
      left: isControlled ? dragItemPosition.x : dragItemPositionUncontrolled.x,
      top: isControlled ? dragItemPosition.y : dragItemPositionUncontrolled.y,
    }
    return {
      onMouseDown: handleOnMouseDown,
      style: {
        width: 'fit-content',
        height: 'fit-content',
        userSelect: 'none',
        cursor: 'pointer',
        position: 'absolute',
        ...xYPosition,
      },
    }
  }, [
    dragItemPosition,
    dragItemPositionUncontrolled,
    isControlled,
    handleOnMouseDown,
  ])

  useEffect(() => {
    /* there's no need to keep the event listeners attached all the time
    only adding the listener when dragging start and removing when dragging ends */
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
    // attached event listeners should get removed upon component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  return { dragItemRef, dragItemProps }
}

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

const nodeResizingMap = {
  [NODE_TYPE_MAP.TEXT_NODE]: { left: true, right: true },
}

const WebsiteBuilderCanvas = forwardRef(function WebsiteBuilderCanvas(
  { nodes, nodeTypes, onNodesChange },
  ref
) {
  const selectedItems = useRef([])
  return (
    <Box
      sx={
        {
          // height: 1000,
        }
      }
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
        // className="container"
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
              onMouseDown={(e) => {
                e.stopPropagation()
                if (!node.selected) {
                  const newSelectedItemsArray = produce(
                    selectedItems.current,
                    (draftState) => {
                      draftState.map((v) => {
                        v.selected = false
                      })
                      draftState.push({
                        type: 'select',
                        id: node.id,
                        selected: true,
                      })
                    }
                  )
                  selectedItems.current = [
                    {
                      type: 'select',
                      id: node.id,
                      selected: true,
                    },
                  ]
                  onNodesChange(newSelectedItemsArray)
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
                  // console.log(data)
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
              {/* <DragAndMove
                dragItemPosition={{ x: node.position.x, y: node.position.y }}
                
              >
              </DragAndMove> */}
            </Box>
          )
        })}
      </div>
    </Box>
  )
})

const Disable = styled('div')({
  width: '100%',
  height: '100%',
  '&::after': {
    content: `''`,
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    // background: 'red',
  },
})

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

function App() {
  // useChatbotFlowBuilder contains all the functionalities, states, context and methods related to chatbotFlow
  const {
    nodes,
    chatbotReactFlowRef,
    setChatbotReactFlowInstance,
    onNodesChange,
  } = useChatbotFlowBuilder()

  console.log('nodes', nodes)

  return (
    <ChatbotFlowBuilder>
      {/* header of the app */}
      <Header />
      <ReactFlowWrapper>
        <WebsiteBuilderCanvas
          ref={chatbotReactFlowRef}
          nodes={nodes}
          onNodesChange={(changes) => {
            console.log(changes)
            onNodesChange(changes)
          }}
          nodeTypes={NODE_TYPE_REACT_FLOW_COMPONENT_MAP}
          onInit={setChatbotReactFlowInstance}
        />
        {/* <ReactFlow
          ref={chatbotReactFlowRef}
          nodes={nodes}
          nodeTypes={NODE_TYPE_REACT_FLOW_COMPONENT_MAP}
          onNodesChange={onNodesChange}
          // edges={edges}
          // onEdgesChange={onEdgesChange}
          // defaultEdgeOptions={defaultEdgeOptions}
          // onConnect={onConnect}
          onInit={setChatbotReactFlowInstance}
          // proOptions={{ hideAttribution: true }}
          // isValidConnection={isValidConnectionUseCallback}
        /> */}
      </ReactFlowWrapper>
      <RightSidePanel>
        <SettingsPanel />
        <NodesPanel />
      </RightSidePanel>
      {/* Using ToastContainer to enable toast notifications in the app */}
      <ToastContainer position={TOAST_CONTAINER_POSITION.TOP_CENTER} />
    </ChatbotFlowBuilder>
  )
}

export default App

const ChatbotFlowBuilder = styled('div')(({ theme }) => ({
  display: 'grid',
  height: '100vh',
  gridTemplateRows: '45px 1fr',
  gridTemplateAreas: `
    'header header'
    'react-flow right-side-panel'
    `,
  overflow: 'hidden',
  gridTemplateColumns: `1fr ${rightSidePanelWidth.sm}`,
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: `1fr ${rightSidePanelWidth.md}`,
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: `1fr ${rightSidePanelWidth.lg}`,
  },
}))

const ReactFlowWrapper = styled('main')({
  gridArea: 'react-flow',
  overflowY: 'auto',
  overflowX: 'hidden',
})

const RightSidePanel = styled('aside')({
  border: '1px solid #d8d8d8',
  borderRight: 'none',
  borderBottom: 'none',
  display: 'grid',
  gridArea: 'right-side-panel',
  overflow: 'hidden',
  position: 'relative',
})
