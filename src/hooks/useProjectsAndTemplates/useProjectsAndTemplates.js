import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { saveProjectsAndTemplatesToLocalStorage } from '../../core/utilFunctions'

export const useProjectsAndTemplates = () => {
  const projectsAndTemplates = useSelector(
    (state) => state.projectsAndTemplates
  )

  useEffect(() => {
    saveProjectsAndTemplatesToLocalStorage(projectsAndTemplates)
  }, [projectsAndTemplates])

  const saveAsTemplate = () => {}
  const saveAndUpdateProject = () => {}

  return { projectsAndTemplates }
}

const getProjectOrTemplateById = (projectId) => {}
