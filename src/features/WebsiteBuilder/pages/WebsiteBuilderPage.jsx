import { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAutoUpdateProject } from '../hooks/useAutoUpdateProject/useAutoUpdateProject.js'
import { useProject } from '../hooks/useProject/useProject.js'
import WebsiteBuilder from '../components/WebsiteBuilder/WebsiteBuilder.jsx'
import WebsiteBuilderProvider from '../context/BuilderProvider.jsx'

const WebsiteBuilderPage = memo(function WebsiteBuilderPage() {
  // useWebsiteBuilder contains all the functionalities, states, context and
  // methods related to website builder part
  const { setProject } = useProject()
  const params = useParams()

  useAutoUpdateProject()

  useEffect(() => {
    setProject(params.projectId)
  }, [params.projectId, setProject])

  return (
    <WebsiteBuilderProvider>
      <WebsiteBuilder />
    </WebsiteBuilderProvider>
  )
})

export default WebsiteBuilderPage
