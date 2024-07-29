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
          emptyListMessage: 'No projects yet',
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
          emptyListMessage: 'No template available',
          renderActions: (data) => {
            return (
              <>
                <PreviewButton id={data.id} />
                <Button
                  onClick={() => {
                    initializeProjectAndRedirect(data.id)
                  }}
                  variant="outlined"
                >
                  Use template
                </Button>
              </>
            )
          },
        },
      },
    ],
    [projectsAndTemplates, initializeProjectAndRedirect]
  )

  return sections
}

const ProjectsAndTemplates = () => {
  const sections = useSections()

  return (
    <Grid container rowSpacing={4}>
      {sections.map((section) => (
        <Grid key={section.id} item xs={12}>
          <Section section={section} />
        </Grid>
      ))}
    </Grid>
  )
}

const Section = ({ section }) => {
  return (
    <section>
      <Typography variant="h3" gutterBottom>
        {section.name}
      </Typography>
      {section.cardData.listItems.length === 0 ? (
        <Typography p={2} textAlign={'center'}>
          {section.cardData.emptyListMessage}
        </Typography>
      ) : (
        <CardItemList
          items={section.cardData.listItems}
          renderCardActions={section.cardData.renderActions}
        />
      )}
    </section>
  )
}

export default ProjectsAndTemplates
