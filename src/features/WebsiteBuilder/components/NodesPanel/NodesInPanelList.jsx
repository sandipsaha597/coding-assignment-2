import { styled } from '@mui/system'
import DragShadow from '../../../../components/DragShadow/DragShadow'

import ExpandMoreIconMUI from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { getActivePage } from '../../../../core/utilFunctions.js'
import {
  getMousePositionRelativeToElement,
  isElementsOverlappingByMargin,
} from '../../../../utils/functions'
import NodeInNodesPanel from './NodeInNodesPanel'
import { useWebsiteBuilderContext } from '../../context/useWebsiteBuilderContext.js'
import { useNodes } from '../../hooks/useNodes/useNodes.js'
import { getNewNodeObject } from '../../schemaGenerator/schemaGetters/getNewNodeObj.js'
import { websiteBuilderPagesSelector } from '../../redux/websiteBuilderSlice.js'
import { store } from '../../../../store/store.js'
import { nodesInNodesPanel } from './constants/nodesInNodesPanel.jsx'
import { zIndexManagement } from '../../../shared/constants/zIndexManagement.js'

const NodesInPanelList = () => {
  const { addNode } = useNodes()
  const { websiteBuilderRef } = useWebsiteBuilderContext()

  const handleOnDrop = (
    { nodeType, defaultData, defaultWidth, defaultHeight },
    e,
    offset,
    draggedItem
  ) => {
    // dimensions of the node in nodes panel
    const draggedItemBoundingClientRect = draggedItem.getBoundingClientRect()

    // check if the chatBotFlow box and node in panel box are overlapping of not
    const isOverlapping = isElementsOverlappingByMargin(
      websiteBuilderRef.current,
      draggedItem,
      // the draggedItem(node in panel) should be 50% or more inside of the chatBotFlow
      draggedItemBoundingClientRect.width / 2,
      draggedItemBoundingClientRect.height / 2
    )
    // if not overlapping returning false which makes it an invalid/unsuccessful drop
    if (isOverlapping === false) return false

    // need the Container position to place the node in the right place of the builder
    const containerElement = websiteBuilderRef.current.querySelector(
      '#preview-and-website-builder-canvas-container'
    )
    const position = getMousePositionRelativeToElement(containerElement, {
      x: e.clientX,
      y: e.clientY,
    })
    const positionOfNewNode = {
      /* positioning the newNode's top-left corner to draggedItem's(node in panel) top-left corner
        Mathematical explanation: 
          Getting the top-left corner(position and offset):
          we know that offset gives the distance between the mouse pointer and the top-left corner of the draggedItem
          that means the if we subtract top-left corner with position we get the position of the top-left corner of draggedItem in canvas
      */
      x: position.x - offset.x,
      y: position.y - offset.y,
    }
    // creating a valid new node to add to website
    const newNode = getNewNodeObject({
      position: positionOfNewNode,
      type: nodeType,
      data: defaultData,
      width: defaultWidth,
      height: defaultHeight,
    })
    const [activePage] = getActivePage(
      websiteBuilderPagesSelector(store.getState())
    )
    const activePageId = activePage.id
    addNode(newNode, activePageId)

    // returning true which makes it a valid/successful drop
    return true
  }

  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIconMUI />}>
        Elements
      </AccordionSummary>
      <AccordionDetails>
        <StyledNodesInPanelList>
          {nodesInNodesPanel.map((nodeData) => {
            const { id, icon, text } = nodeData
            return (
              /* using DragShadow component to make the node draggable
      upon dragging the node, the node will stay at the same place but a shadow will appear
      which will move with the mouse */
              // <Box  sx={{ width: '50%', border: '2px solid dodgerblue' }}>
              <DragShadow
                key={id}
                dragShadowSx={{
                  zIndex: zIndexManagement.nodesPanelListDragShadow,
                }}
                onDrop={(...args) => handleOnDrop(nodeData, ...args)}
              >
                <NodeInNodesPanel icon={icon} text={text} />
              </DragShadow>
              // </Box>
            )
          })}
        </StyledNodesInPanelList>
      </AccordionDetails>
    </Accordion>
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
