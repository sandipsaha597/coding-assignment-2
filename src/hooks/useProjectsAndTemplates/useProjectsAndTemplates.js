import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProjectsAndTemplates } from '../../core/getAllProjectsAndTemplates/getAllProjectsAndTemplates'
import {
  projectAndTemplatesSelector,
  projectsAndTemplatesSliceActions,
} from '../../store/projectAndTemplatesSlice/projectsAndTemplatesSlice'

export const useProjectsAndTemplates = () => {
  const projectsAndTemplatesUserAdded = useSelector(projectAndTemplatesSelector)
  const projectsAndTemplates = getAllProjectsAndTemplates(
    projectsAndTemplatesUserAdded
  )

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
