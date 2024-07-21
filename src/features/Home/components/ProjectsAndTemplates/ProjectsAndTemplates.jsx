import React, { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProjectsAndTemplates } from '../../../../hooks/useProjectsAndTemplates/useProjectsAndTemplates'
import PreviewButton from '../../../../components/PreviewButton/PreviewButton'
import { Button, Grid, Typography } from '@mui/material'
import CardItemList from '../CardItemsList/CardItemsList'

const useSections = () => {
  const { projectsAndTemplates, initializeProject } = useProjectsAndTemplates()
  const navigate = useNavigate()

  const sections = useMemo(
    () => [
      {
        id: 1,
        name: 'Projects',
        cardData: {
          listItems: projectsAndTemplates.projects,
          renderActions: (data) => (
            <>
              <PreviewButton id={data.id} />
              <Button
                component={Link}
                to={`/builder/${data.id}`}
                variant="outlined"
              >
                Edit
              </Button>
            </>
          ),
        },
      },
      {
        id: 2,
        name: 'Templates',
        cardData: {
          listItems: projectsAndTemplates.templates,
          renderActions: (data) => (
            <>
              <PreviewButton data={data.id} />
              <Button
                onClick={() => {
                  const projectId = initializeProject(data.id)
                  navigate(`/builder/${projectId}`)
                }}
                variant="outlined"
              >
                Use template
              </Button>
            </>
          ),
        },
      },
    ],
    [initializeProject, navigate, projectsAndTemplates]
  )

  return sections
}

const ProjectsAndTemplates = () => {
  const sections = useSections()

  return (
    <Grid container spacing={4}>
      {sections.map((section) => (
        <Grid key={section.id} item xs={12} component={'section'}>
          <Typography variant="h3" mb={2}>
            {section.name}
          </Typography>
          <CardItemList
            items={section.cardData.listItems}
            renderCardActions={section.cardData.renderActions}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProjectsAndTemplates
