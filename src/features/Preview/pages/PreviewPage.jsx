import { useParams } from 'react-router-dom'
import { getProjectOrTemplateById } from '../../../core/utilFunctions'
import Preview from '../components/Preview'
import { useMemo, useState } from 'react'
import { useProjectsAndTemplates } from '../../../hooks/useProjectsAndTemplates/useProjectsAndTemplates'
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

import { deviceWidthHeightMap } from '../constants/deviceWidthHeightMap'
import { devices } from '../constants/devices'
import PreviewPageHeader from '../components/PreviewHeader'

const PreviewPage = () => {
  const { projectOrTemplateId } = useParams()
  const { projectsAndTemplates } = useProjectsAndTemplates()
  const [selectedDevice, setSelectedDevice] = useState(devices.laptop)

  const [project] = useMemo(() => {
    return getProjectOrTemplateById(
      projectOrTemplateId,
      projectsAndTemplates.projects,
      projectsAndTemplates.templates
    )
  }, [projectOrTemplateId, projectsAndTemplates])

  if (!project) return <h1>Invalid id</h1>

  const widthAndHeight = deviceWidthHeightMap[selectedDevice]
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        background: '#f3f3f3',
        height: '100vh',
      }}
    >
      <PreviewPageHeader
        selectedDevice={selectedDevice}
        setSelectedDevice={setSelectedDevice}
      />
      <Box
        sx={{
          // border: '5px solid dodgerblue',
          margin: '0 auto',
          // boxSizing: 'border-box',
          overflow: 'auto',
          background: '#fff',
          ...widthAndHeight,
        }}
      >
        <Preview project={project} />
      </Box>
    </Box>
  )
}

export default PreviewPage
