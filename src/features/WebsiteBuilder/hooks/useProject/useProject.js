import { useDispatch, useSelector } from 'react-redux'
import {
  websiteBuilderSelector,
  websiteBuilderSliceActions,
} from '../../redux/websiteBuilderSlice'
import { useCallback } from 'react'
import { getProjectById } from '../../../../core/utilFunctions'

export const useProject = () => {
  const websiteBuilderState = useSelector(websiteBuilderSelector)
  const dispatch = useDispatch()

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
  return { websiteBuilderState, setProject }
}
