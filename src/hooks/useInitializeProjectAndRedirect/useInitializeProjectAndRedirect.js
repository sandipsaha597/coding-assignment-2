import { useNavigate } from 'react-router-dom'
import { useProjectsAndTemplates } from '../useProjectsAndTemplates/useProjectsAndTemplates'

export const useInitializeProjectAndRedirect = () => {
  const { initializeProject } = useProjectsAndTemplates()
  const navigate = useNavigate()

  const initializeProjectAndRedirect = (templateId) => {
    const projectId = initializeProject(templateId)
    navigate(`/builder/${projectId}`)
  }

  return { initializeProjectAndRedirect }
}
