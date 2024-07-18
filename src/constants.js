import ButtonNodeEditForm from './components/ReactFlowNodeEditForms/ButtonNodeEditForm/ButtonNodeEditForm'
import ImageNodeEditForm from './components/ReactFlowNodeEditForms/ImageNodeEditForm/ImageNodeEditForm'
import TextNodeEditForm from './components/ReactFlowNodeEditForms/TextNodeEditForm/TextNodeEditForm'
import VideoNodeEditForm from './components/ReactFlowNodeEditForms/VideoNodeEditForm/VideoNodeEditForm'
import ButtonNodeInReactFlow from './components/ReactFlowNodes/ButtonNode/ButtonNodeInReactFlow'
import ImageNodeInReactFlow from './components/ReactFlowNodes/ImageNode/ImageNodeInReactFlow'
import TextNodeInReactFlow from './components/ReactFlowNodes/TextNode/TextNodeInReactFlow'
import VideoNodeInReactFlow from './components/ReactFlowNodes/VideoNode/VideoNodeInReactFlow'

/**
 * Naming conventions:
 * - Screaming Snake Case (e.g., NODE_TYPE_FORM_COMPONENT_MAP) indicates that the values
 *   are linked with values saved in backend, localStorage, sessionStorage, etc. These should be
 *   changed with high caution.
 * - camelCase names (e.g., defaultEdgeOptions) indicate that names are used only in the frontend
 *   codebase and can be changed more easily.
 */

// width of the right side panel of the app
export const rightSidePanelWidth = {
  sm: '90px',
  md: '200px',
  lg: '400px',
}

// Types of nodes available in the chatbot flow.
export const NODE_TYPE_MAP = {
  TEXT_NODE: 'textNode',
  IMAGE_NODE: 'imageNode',
  VIDEO_NODE: 'videoNode',
  BUTTON_NODE: 'buttonNode',
}

/*
 * Maps the node types to components. It tells reactFlow which component
 * should be shown for each node type. Passed in the nodeTypes prop of reactFlow.
 */
export const NODE_TYPE_REACT_FLOW_COMPONENT_MAP = {
  [NODE_TYPE_MAP.TEXT_NODE]: TextNodeInReactFlow,
  [NODE_TYPE_MAP.IMAGE_NODE]: ImageNodeInReactFlow,
  [NODE_TYPE_MAP.VIDEO_NODE]: VideoNodeInReactFlow,
  [NODE_TYPE_MAP.BUTTON_NODE]: ButtonNodeInReactFlow,
  // [NODE_TYPE_MAP.FORM_NODE]: FormNode,
}

/**
 * Maps node types to their corresponding form components.
 * All form components should follow a specific structure:
 * - They should take the data through props.data and display it in the form inputs.
 * - They should call the props.onChange callback function with the new values
 *   (the whole data object to be set as the selected node's data).
 */
export const NODE_TYPE_FORM_COMPONENT_MAP = {
  [NODE_TYPE_MAP.TEXT_NODE]: TextNodeEditForm,
  [NODE_TYPE_MAP.IMAGE_NODE]: ImageNodeEditForm,
  [NODE_TYPE_MAP.VIDEO_NODE]: VideoNodeEditForm,
  [NODE_TYPE_MAP.BUTTON_NODE]: ButtonNodeEditForm,
}

// Keys used for storing data in localStorage
export const LOCAL_STORAGE_KEYS = {
  SAVED_CHATBOT_FLOW_BUILDER_STATE: 'savedChatbotFlowBuilderState',
}
