import { useSelector } from 'react-redux'
import { projectAndTemplatesSelector } from '../../store/projectAndTemplatesSlice/projectsAndTemplatesSlice'
import { useEffect } from 'react'
import { saveProjectsAndTemplatesToLocalStorage } from '../../core/utilFunctions'

export const useAutoSaveProjectsAndTemplates = () => {
  const projectsAndTemplates = useSelector(projectAndTemplatesSelector)

  useEffect(() => {
    saveProjectsAndTemplatesToLocalStorage(projectsAndTemplates)
  }, [projectsAndTemplates])
}
