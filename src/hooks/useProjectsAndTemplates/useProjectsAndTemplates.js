import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  projectAndTemplatesSelector,
  projectsAndTemplatesSliceActions,
} from '../../store/projectAndTemplatesSlice/projectsAndTemplatesSlice'

export const useProjectsAndTemplates = () => {
  const projectsAndTemplates = useSelector(projectAndTemplatesSelector)

  const dispatch = useDispatch()

  const updateProject = useCallback(
    (updatedProject) => {
      dispatch(
        projectsAndTemplatesSliceActions.updateProject({
          updatedProject,
        })
      )
    },
    [dispatch]
  )

  const initializeProject = useCallback(
    (templateId) => {
      const newProjectId = crypto.randomUUID()
      dispatch(
        projectsAndTemplatesSliceActions.initializeProject({
          templateId,
          newProjectId,
        })
      )
      return newProjectId
    },
    [dispatch]
  )

  const saveAsTemplate = useCallback(
    (entireTemplateObject) => {
      const newTemplateId = crypto.randomUUID()
      dispatch(
        projectsAndTemplatesSliceActions.saveAsTemplate({
          newTemplateId,
          entireTemplateObject,
        })
      )
    },
    [dispatch]
  )

  return {
    projectsAndTemplates,
    initializeProject,
    updateProject,
    saveAsTemplate,
  }
}
