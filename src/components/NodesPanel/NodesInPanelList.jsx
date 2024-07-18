import { NODE_TYPE_MAP } from '../../constants'
import useChatbotFlowBuilder from '../../hooks/useChatbotFlowBuilder/useChatbotFlowBuilder'
import { isElementsOverlappingByMargin } from '../../utils/functions'
import DragShadow from '../DragShadow/DragShadow'
import FormatColorTextIconMUI from '@mui/icons-material/FormatColorText'
import ImageOutlinedIconMUI from '@mui/icons-material/ImageOutlined'
import VideoCameraBackOutlinedIconMUI from '@mui/icons-material/VideoCameraBackOutlined'
import SmartButtonOutlinedIconMUI from '@mui/icons-material/SmartButtonOutlined'
import NodeInNodesPanel from './NodeInNodesPanel'
import { styled } from '@mui/system'
import { Box } from '@mui/material'

// list of nodes currently available is the app and shown in the nodes panel
const nodesInNodesPanel = [
  {
    id: crypto.randomUUID(),
    nodeType: NODE_TYPE_MAP.TEXT_NODE,
    icon: <FormatColorTextIconMUI fontSize="large" />,
    text: 'Text message',
    defaultData: {
      textMessage: 'Text message',
    },
  },
  {
    id: crypto.randomUUID(),
    nodeType: NODE_TYPE_MAP.IMAGE_NODE,
    icon: <ImageOutlinedIconMUI fontSize="large" />,
    text: 'Image',
    defaultData: {
      src: 'https://placehold.co/400x400',
      alt: 'dummy image',
      width: 400,
      height: 400,
    },
  },
  {
    id: crypto.randomUUID(),
    nodeType: NODE_TYPE_MAP.VIDEO_NODE,
    icon: <VideoCameraBackOutlinedIconMUI fontSize="large" />,
    text: 'Video',
    defaultData: {
      src: 'https://videos.pexels.com/video-files/17127360/17127360-uhd_2560_1440_30fps.mp4',
      title: 'Dummy video',
    },
  },
  {
    id: crypto.randomUUID(),
    nodeType: NODE_TYPE_MAP.BUTTON_NODE,
    icon: <SmartButtonOutlinedIconMUI fontSize="large" />,
    text: 'Button',
    defaultData: {
      buttonText: 'Click',
    },
  },
]

const getMousePositionRelativeToElement = (element, mousePosition) => {
  const elementBoundingRect = element.getBoundingClientRect()
  return {
    x: mousePosition.x - elementBoundingRect.left,
    y: mousePosition.y - elementBoundingRect.top,
  }
}

const NodesInPanelList = () => {
  const { addNode, chatbotReactFlowRef } = useChatbotFlowBuilder()

  return (
    <StyledNodesInPanelList>
      {nodesInNodesPanel.map(({ id, nodeType, defaultData, icon, text }) => {
        return (
          /* using DragShadow component to make the node draggable
      upon dragging the node, the node will stay at the same place but a shadow will appear
      which will move with the mouse */
          // <Box  sx={{ width: '50%', border: '2px solid dodgerblue' }}>
          <DragShadow
            key={id}
            onDrop={(e, offset, draggedItem) => {
              // dimensions of the node in nodes panel
              const draggedItemBoundingClientRect =
                draggedItem.getBoundingClientRect()

              // check if the chatBotFlow box and node in panel box are overlapping of not
              const isOverlapping = isElementsOverlappingByMargin(
                chatbotReactFlowRef.current,
                draggedItem,
                // the draggedItem(node in panel) should be 50% or more inside of the chatBotFlow
                draggedItemBoundingClientRect.width / 2,
                draggedItemBoundingClientRect.height / 2
              )
              // if not overlapping returning false which makes it an invalid/unsuccessful drop
              if (isOverlapping === false) return false

              // need the screenToFlowPosition to place the node in the right place of the flow
              // const position = chatbotReactFlowInstance.screenToFlowPosition()
              const position = getMousePositionRelativeToElement(
                chatbotReactFlowRef.current.children[0],
                {
                  x: e.clientX,
                  y: e.clientY,
                }
              )
              // creating a valid new node to add to chatbotFlow
              const newNode = {
                id: crypto.randomUUID(),
                position: {
                  /* positioning the newNode's top-left corner to draggedItem's(node in panel) top-left corner, despite of zoom level
                   Mathematical explanation: 
                    Getting the top-left corner(position and offset):
                    we know that offset gives the distance between the mouse pointer and the top-left corner of the draggedItem
                    that means the if we subtract top-left corner with position we get the position of the top-left corner of draggedItem in reactFlow

                    taking care of zoom level:
                    the default zoom level is 1
                    the fully zoomed-in level is 2
                    the fully zoomed-out level is 0.5

                    default zoom is normal offset divided by 1 results in the same number
                    fully zoomed-in means, if the distance between point a and point b was x, now it is x * 2. So the offset should decrease by half to align properly
                    the opposite goes with zoom-out
                  */
                  x: position.x - offset.x,
                  y: position.y - offset.y,
                },
                type: nodeType,
                data: defaultData,
              }
              addNode(newNode)

              // returning true which makes it a valid/successful drop
              return true
            }}
          >
            <NodeInNodesPanel icon={icon} text={text} />
          </DragShadow>
          // </Box>
        )
      })}
    </StyledNodesInPanelList>
  )
}

export default NodesInPanelList

const StyledNodesInPanelList = styled('div')(({ theme }) => ({
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: `1fr 1fr`,
  },
  // gridTemplateRows: '1fr 1fr',
  // gridTemplateAreas: `
  //   'header header'
  //   'react-flow right-side-panel'
  //   `,
  // gap: '10px',
  // flexFlow: 'row wrap',
}))
