/**
 * This hook contains the global state, context, and methods for the websiteBuilder.
 *
 * @returns {Object} An object containing various states, context, and methods to interact with the websiteBuilder.
 *
 * Properties:
 *  - {Array} nodes: The nodes currently present in the websiteBuilder.
 *  - {Function} addNode: A function to add a node to the flow.
 *  - {Array} selectedNodes: Nodes that are currently selected in the flow.
 *  - {Function} onNodesChange: A React Flow prop. Pass the values as they are.
 *  - {Function} editNodeData: A function to edit the data of an existing node.
 *  - {Array} edges: The edges currently present in the websiteBuilder.
 *  - {Function} onEdgesChange: A React Flow prop. Pass the values as they are.
 *  - {Function} onConnect: A React Flow prop. Pass the values as they are.
 *  - {Ref} chatbotReactFlowRef: HTML element reference of the websiteBuilder.
 *  - {Object} chatbotReactFlowInstance: The instance of chatbotReactFlow, initialized upon website (reactFlow) initialization.
 *        This includes methods like addNodes, screenToFlowPosition, etc. Refer to the React Flow documentation for more info: https://reactflow.dev/api-reference/types/react-flow-instance
 *  - {Function} setChatbotReactFlowInstance: Sets the chatbotReactFlowInstance. Pass it in the onInit prop of React Flow.
 */

import { useWebsiteBuilderContext } from '../../context/useWebsiteBuilderContext'
import { useNavbar } from '../useNavbar/useNavbar'
import { useNodes } from '../useNodes/useNodes'
import { usePages } from '../usePages/usePages'
import { useProject } from '../useProject/useProject'
import { useProjectThemeAndGlobalStyle } from '../useProjectThemeAndGlobalStyles/useProjectThemeAndGlobalStyles'

export const useWebsiteBuilder = () => {
  const { websiteBuilderState, setProject } = useProject()
  const { themeAndGlobalStyles } = useProjectThemeAndGlobalStyle()

  const {
    pages,
    activePage,
    addPage,
    activePageId,
    changeActivePage,
    updatePageDetails,
  } = usePages()

  const { navbar, addItemInNavbar, updateItemInNavbar } = useNavbar()

  const {
    nodes,
    selectedNodes,
    addNode,
    deleteNode,
    editNodeData,
    onNodeSelect,
    updateNodeSize,
    updateNodePosition,
  } = useNodes()

  const { websiteBuilderRef } = useWebsiteBuilderContext()

  return {
    navbar,
    addItemInNavbar,
    updateItemInNavbar,

    nodes,
    selectedNodes,
    addNode,
    deleteNode,
    onNodeSelect,
    updateNodeSize,
    updateNodePosition,
    editNodeData,

    pages,
    activePage,
    activePageId,
    addPage,
    changeActivePage,
    updatePageDetails,

    websiteBuilderRef,

    websiteBuilderState,

    setProject,

    themeAndGlobalStyles,
  }
}
