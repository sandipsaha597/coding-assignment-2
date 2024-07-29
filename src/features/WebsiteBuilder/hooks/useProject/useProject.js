import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectById } from '../../../../core/utilFunctions'
import { projectsSelector } from '../../../../store/projectAndTemplatesSlice/projectsAndTemplatesSlice'
import { store } from '../../../../store/store'
import {
  websiteBuilderSelector,
  websiteBuilderSliceActions,
} from '../../redux/websiteBuilderSlice'

export const useProject = () => {
  const websiteBuilderState = useSelector(websiteBuilderSelector)
  const projectId = websiteBuilderState.id
  const projectName = websiteBuilderState.projectName
  const dispatch = useDispatch()

  const setProject = useCallback(
    (id) => {
      const [project] = getProjectById(id, projectsSelector(store.getState()))
      dispatch(
        websiteBuilderSliceActions.setProject({
          project,
        })
      )
    },
    [dispatch]
  )

  const editProjectName = useCallback(
    (name) => {
      dispatch(
        websiteBuilderSliceActions.editProjectName({
          name,
        })
      )
    },
    [dispatch]
  )

  return {
    websiteBuilderState,
    projectId,
    projectName,
    editProjectName,
    setProject,
  }
}
