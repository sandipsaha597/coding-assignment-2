import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Button,
} from '@mui/material'
import { useProjectsAndTemplates } from '../../../hooks/useProjectsAndTemplates/useProjectsAndTemplates'

const HomePage = () => {
  const { projectsAndTemplates } = useProjectsAndTemplates()
  console.log({ projectsAndTemplates })

  return (
    <Container component="main">
      <section>
        <Typography variant="h3" mb={3}>
          Projects
        </Typography>
        {projectsAndTemplates.projects.map((project) => {
          return (
            <Card key={project.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Share</Button>
                <Button>Learn More</Button>
              </CardActions>
            </Card>
          )
        })}
      </section>
      <section>
        <Typography variant="h3" mb={3}>
          Templates
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridGap: 20,
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
          }}
        >
          {projectsAndTemplates.templates.map((project) => {
            return (
              <Card key={project.id} sx={{}} elevation={3}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.projectName}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>Preview</Button>
                  <Button>Use template</Button>
                </CardActions>
              </Card>
            )
          })}
        </Box>
      </section>
    </Container>
  )
}

export default HomePage
