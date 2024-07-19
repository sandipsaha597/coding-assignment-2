import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPageById, getProjectById } from '../../../../core/utilFunctions.js'
import { useWebsiteBuilderContext } from '../../context/useWebsiteBuilderContext.js'
import { websiteBuilderSliceActions } from '../../redux/websiteBuilderSlice.js'
import { getNewPageObj } from '../../utils/utils.js'
import { useProjectsAndTemplates } from '../../../../hooks/useProjectsAndTemplates/useProjectsAndTemplates.js'
import { debounce } from '@mui/material'

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

export const useWebsiteBuilder = () => {
  const websiteBuilderState = useSelector((state) => state.websiteBuilder)
  const { pages, activePageId } = websiteBuilderState

  const { websiteBuilderRef } = useWebsiteBuilderContext()
  const { updateProject } = useProjectsAndTemplates()
  const dispatch = useDispatch()
  const [activePage] = getPageById(activePageId, pages)
  const nodes = activePage.nodes

  const debounceUpdateProject = useMemo(
    () => debounce(updateProject, 300),
    [updateProject]
  )

  useEffect(() => {
    debounceUpdateProject(websiteBuilderState)
  }, [websiteBuilderState, debounceUpdateProject])

  // when a node is selected, that node's selected fields becomes true through onNodesChange
  const selectedNodes = useMemo(() => {
    return nodes
      .filter((node) => node.selected)
      .map((v) => ({ id: v.id, type: v.type, data: v.data }))
  }, [nodes])

  /*  */
  /**
   * use this function to add a node to websiteBuilder.
   * newNode should be a valid reactFlow node
   * to remove a a node just select the node in the UI and press backspace
   * that node and all the edges will get deleted automatically
   *
   * Adds a new node to the state.
   * @param {Object} newNode - a valid new node
   */
  const addNode = useCallback(
    (newNode) => {
      dispatch(websiteBuilderSliceActions.addNode({ newNode }))
    },
    [dispatch]
  )
  const addPage = useCallback(() => {
    dispatch(websiteBuilderSliceActions.addPage({ newPage: getNewPageObj() }))
  }, [dispatch])

  const changeActivePage = useCallback(
    (pageId) => {
      dispatch(
        websiteBuilderSliceActions.changeActivePage({
          pageId,
        })
      )
    },
    [dispatch]
  )

  /* reactFlow prop */
  /* upon selecting a node and pressing backspace deletes that node
    If onNodeChange is not there changes won't be applied, unless we are using uncontrolled reactFlow component */
  const onNodesChange = useCallback(
    (changes) =>
      dispatch(websiteBuilderSliceActions.onNodesChange({ changes })),
    [dispatch]
  )

  /**
   * Edits the data of a node in the state based on the provided node ID.
   * @param {String} payload.id - a valid nodeId
   * @param {Object} payload.newData - newData object to replace the old data object
   */
  const editNodeData = useCallback(
    (nodeId, newData) => {
      dispatch(
        websiteBuilderSliceActions.editNodeData({
          nodeId,
          newData,
        })
      )
    },
    [dispatch]
  )

  const setProject = useCallback(
    (id) => {
      const [project] = getProjectById(id)
      dispatch(
        websiteBuilderSliceActions.setProject({
          project,
        })
      )
    },
    [dispatch]
  )

  return {
    nodes,
    addNode,
    selectedNodes,
    onNodesChange,
    addPage,
    editNodeData,
    pages,
    activePageId,
    changeActivePage,
    websiteBuilderRef,
    setProject,
  }
}
