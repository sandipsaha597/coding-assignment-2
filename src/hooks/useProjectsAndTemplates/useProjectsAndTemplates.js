import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveProjectsAndTemplatesToLocalStorage } from '../../core/utilFunctions'
import { projectsAndTemplatesSliceActions } from '../../store/projectAndTemplatesSlice/projectsAndTemplatesSlice'

export const useProjectsAndTemplates = () => {
  const projectsAndTemplates = useSelector(
    (state) => state.projectsAndTemplates
  )

  const dispatch = useDispatch()

  useEffect(() => {
    saveProjectsAndTemplatesToLocalStorage(projectsAndTemplates)
  }, [projectsAndTemplates])

  // const saveAsTemplate = () => {}
  // const saveAndUpdateProject = () => {}

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

  return { projectsAndTemplates, initializeProject }
}
