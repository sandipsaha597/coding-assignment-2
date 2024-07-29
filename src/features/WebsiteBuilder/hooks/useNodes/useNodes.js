import { useCallback, useMemo } from 'react'
import { usePages } from '../usePages/usePages'
import { useDispatch } from 'react-redux'
import { websiteBuilderSliceActions } from '../../redux/websiteBuilderSlice'

export const useNodes = () => {
  const { activePage } = usePages()

  const nodes = activePage.nodes
  const selectedNodes = useMemo(() => {
    return nodes
      .filter((node) => node.selected)
      .map((v) => ({ id: v.id, type: v.type, data: v.data }))
  }, [nodes])

  const dispatch = useDispatch()

  // when a node is selected, that node's selected fields becomes true through onNodesChange

  /*  */
  /**
   * use this function to add a node to websiteBuilder.
   * newNode should be a valid websiteBuilder node
   * to remove a a node just select the node in the UI and press backspace
   * that node and all the edges will get deleted automatically
   *
   * Adds a new node to the state.
   * @param {Object} newNode - a valid new node
   */
  const addNode = useCallback(
    (newNode, pageId) => {
      dispatch(websiteBuilderSliceActions.addNode({ newNode, pageId }))
    },
    [dispatch]
  )
  const deleteNode = useCallback(
    (id) => {
      dispatch(websiteBuilderSliceActions.deleteNode({ id }))
    },
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

  const onNodeSelect = useCallback(
    (id) => dispatch(websiteBuilderSliceActions.onNodeSelect({ id })),
    [dispatch]
  )

  const updateNodeSize = useCallback(
    (id, { changedWidth, changedHeight, position }) => {
      dispatch(
        websiteBuilderSliceActions.updateNodeSize({
          id,
          changedWidth,
          changedHeight,
          position,
        })
      )
    },
    [dispatch]
  )

  const updateNodePosition = useCallback(
    (id, position) =>
      dispatch(websiteBuilderSliceActions.updateNodePosition({ id, position })),
    [dispatch]
  )

  return {
    nodes,
    selectedNodes,
    addNode,
    deleteNode,
    editNodeData,
    onNodeSelect,
    updateNodeSize,
    updateNodePosition,
  }
}
