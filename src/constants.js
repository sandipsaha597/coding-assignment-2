import ButtonNodeEditForm from './features/WebsiteBuilder/components/ReactFlowNodeEditForms/ButtonNodeEditForm/ButtonNodeEditForm'
import ImageNodeEditForm from './features/WebsiteBuilder/components/ReactFlowNodeEditForms/ImageNodeEditForm/ImageNodeEditForm'
import TextNodeEditForm from './features/WebsiteBuilder/components/ReactFlowNodeEditForms/TextNodeEditForm/TextNodeEditForm'
import VideoNodeEditForm from './features/WebsiteBuilder/components/ReactFlowNodeEditForms/VideoNodeEditForm/VideoNodeEditForm'
import ButtonNodeInWebsiteBuilder from './features/WebsiteBuilder/components/ReactFlowNodes/ButtonNode/ButtonNodeInReactFlow'
import ImageNodeInReactFlow from './features/WebsiteBuilder/components/ReactFlowNodes/ImageNode/ImageNodeInReactFlow'
import TextNodeInWebsiteBuilder from './features/WebsiteBuilder/components/ReactFlowNodes/TextNode/TextNodeInReactFlow'
import VideoNodeInWebsiteBuilder from './features/WebsiteBuilder/components/ReactFlowNodes/VideoNode/VideoNodeInReactFlow'

/**
 * Naming conventions:
 * - Screaming Snake Case (e.g., NODE_TYPE_FORM_COMPONENT_MAP) indicates that the values
 *   are linked with values saved in backend, localStorage, sessionStorage, etc. These should be
 *   changed with high caution.
 * - camelCase names (e.g., defaultEdgeOptions) indicate that names are used only in the frontend
 *   codebase and can be changed more easily.
 */

export const renderMode = {
  editor: 'editor',
  previewOrLive: 'previewOrLive',
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
export const nodeTypeWebsiteBuilderComponentMap = {
  [NODE_TYPE_MAP.TEXT_NODE]: TextNodeInWebsiteBuilder,
  [NODE_TYPE_MAP.IMAGE_NODE]: ImageNodeInReactFlow,
  [NODE_TYPE_MAP.VIDEO_NODE]: VideoNodeInWebsiteBuilder,
  [NODE_TYPE_MAP.BUTTON_NODE]: ButtonNodeInWebsiteBuilder,
}

/**
 * Maps node types to their corresponding form components.
 * All form components should follow a specific structure:
 * - They should take the data through props.data and display it in the form inputs.
 * - They should call the props.onChange callback function with the new values
 *   (the whole data object to be set as the selected node's data).
 */
export const nodeTypeFormComponentMap = {
  [NODE_TYPE_MAP.TEXT_NODE]: TextNodeEditForm,
  [NODE_TYPE_MAP.IMAGE_NODE]: ImageNodeEditForm,
  [NODE_TYPE_MAP.VIDEO_NODE]: VideoNodeEditForm,
  [NODE_TYPE_MAP.BUTTON_NODE]: ButtonNodeEditForm,
}

debugger

// Keys used for storing data in localStorage
export const LOCAL_STORAGE_KEYS = {
  SAVED_PROJECTS_AND_TEMPLATES_STATE: 'savedProjectsAndTemplatesState',
}

export const availableFonts = [
  {
    id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    font: 'Roboto',
    weights: [400],
  },
  {
    id: '1b2c3d4e-5f6g-7h8i-9j0k-1l2m3n4o5p6q',
    font: 'Open Sans',
    weights: [400],
  },
  {
    id: '1c2d3e4f-5g6h-7i8j-9k0l-1m2n3o4p5q6r',
    font: 'Lato',
    weights: [400],
  },
  {
    id: '1d2e3f4g-5h6i-7j8k-9l0m-1n2o3p4q5r6s',
    font: 'Montserrat',
    weights: [400],
  },
  {
    id: '1e2f3g4h-5i6j-7k8l-9m0n-1o2p3q4r5s6t',
    font: 'Raleway',
    weights: [400],
  },
  {
    id: '1f2g3h4i-5j6k-7l8m-9n0o-1p2q3r4s5t6u',
    font: 'Poppins',
    weights: [400],
  },
  {
    id: '1g2h3i4j-5k6l-7m8n-9o0p-1q2r3s4t5u6v',
    font: 'Merriweather',
    weights: [400],
  },
  {
    id: '1h2i3j4k-5l6m-7n8o-9p0q-1r2s3t4u5v6w',
    font: 'Nunito',
    weights: [400],
  },
  {
    id: '1i2j3k4l-5m6n-7o8p-9q0r-1s2t3u4v5w6x',
    font: 'Oswald',
    weights: [400],
  },
  {
    id: '1j2k3l4m-5n6o-7p8q-9r0s-1t2u3v4w5x6y',
    font: 'Roboto Mono',
    weights: [400],
  },
]
