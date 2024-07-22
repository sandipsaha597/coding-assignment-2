import { Button, Grid, Typography } from '@mui/material'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import PreviewButton from '../../../../components/PreviewButton/PreviewButton'
import { useInitializeProjectAndRedirect } from '../../../../hooks/useInitializeProjectAndRedirect/useInitializeProjectAndRedirect'
import { useProjectsAndTemplates } from '../../../../hooks/useProjectsAndTemplates/useProjectsAndTemplates'
import CardItemList from '../CardItemsList/CardItemsList'

const useSections = () => {
  const { projectsAndTemplates } = useProjectsAndTemplates()
  const { initializeProjectAndRedirect } = useInitializeProjectAndRedirect()

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
                  initializeProjectAndRedirect(data.id)
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
    [projectsAndTemplates]
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
