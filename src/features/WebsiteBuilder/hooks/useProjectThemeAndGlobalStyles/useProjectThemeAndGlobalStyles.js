import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  websiteBuilderSliceActions,
  websiteBuilderThemeAndGlobalStyleSelector,
} from '../../redux/websiteBuilderSlice'

export const useProjectThemeAndGlobalStyle = () => {
  const themeAndGlobalStyles = useSelector(
    websiteBuilderThemeAndGlobalStyleSelector
  )
  const dispatch = useDispatch()

  // when a node is selected, that node's selected fields becomes true through onNodesChange

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
  const changeThemeColor = useCallback(
    (id, color) => {
      dispatch(websiteBuilderSliceActions.changeThemeColor({ id, color }))
    },
    [dispatch]
  )

  return {
    themeAndGlobalStyles,
    changeThemeColor,
  }
}
