import { useParams } from 'react-router-dom'
import { getProjectOrTemplateById } from '../../../core/utilFunctions'
import Preview from '../components/Preview'
import { useMemo } from 'react'
import { useProjectsAndTemplates } from '../../../hooks/useProjectsAndTemplates/useProjectsAndTemplates'

const PreviewPage = () => {
  const { projectOrTemplateId } = useParams()
  const { projectsAndTemplates } = useProjectsAndTemplates()

  const [project] = useMemo(() => {
    return getProjectOrTemplateById(
      projectOrTemplateId,
      projectsAndTemplates.projects,
      projectsAndTemplates.templates
    )
  }, [projectOrTemplateId, projectsAndTemplates])

  if (!project) return <h1>Invalid id</h1>

  return <Preview project={project} />
}

export default PreviewPage
