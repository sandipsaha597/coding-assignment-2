import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveProjectsAndTemplatesToLocalStorage } from '../../core/utilFunctions'
import {
  projectAndTemplatesSelector,
  projectsAndTemplatesSliceActions,
} from '../../store/projectAndTemplatesSlice/projectsAndTemplatesSlice'

export const useProjectsAndTemplates = () => {
  const projectsAndTemplates = useSelector(projectAndTemplatesSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    saveProjectsAndTemplatesToLocalStorage(projectsAndTemplates)
  }, [projectsAndTemplates])

  // const saveAsTemplate = () => {}
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

  return { projectsAndTemplates, initializeProject, updateProject }
}
