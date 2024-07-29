/**
 * This hook contains the global state, context, and methods for the websiteBuilder.
 *
 * @returns {Object} An object containing various states, context, and methods to interact with the websiteBuilder.
 *
 * Properties:
 *  - {Array} nodes: The nodes currently present in the websiteBuilder.
 *  - {Function} addNode: A function to add a node to the flow.
 *  - {Array} selectedNodes: Nodes that are currently selected in the flow.
 *  - {Function} editNodeData: A function to edit the data of an existing node.
 *  - {Ref} websiteBuilderRef: HTML element reference of the websiteBuilder.
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
