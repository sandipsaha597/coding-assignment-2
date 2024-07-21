import { NODE_TYPE_MAP } from '../../constants'

export const nodeResizingMap = {
  [NODE_TYPE_MAP.TEXT_NODE]: { left: true, right: true },
}

// width of the right side panel of the app
export const rightSidePanelWidth = {
  sm: '90px',
  md: '200px',
  lg: '400px',
}

export const zIndexManagement = {
  pagesAndAddPages: 100,
  nodesPanelListDragShadow: 75,
  selectedNodeInCanvas: 50,
}
