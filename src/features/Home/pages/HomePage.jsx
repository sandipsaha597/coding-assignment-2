import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useProjectsAndTemplates } from '../../../hooks/useProjectsAndTemplates/useProjectsAndTemplates'

const HomePage = () => {
  const { projectsAndTemplates, initializeProject } = useProjectsAndTemplates()
  const navigate = useNavigate()

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
                <Button>Preview</Button>
                <Button component={Link} to={`/builder/${project.id}`}>
                  Edit
                </Button>
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
          {projectsAndTemplates.templates.map((template) => {
            return (
              <Card key={template.id} sx={{}} elevation={3}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {template.projectName}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button>Preview</Button> */}
                  <Button component={Link} to={`/preview${template.id}`}>
                    Preview
                  </Button>
                  <Button
                    onClick={() => {
                      const projectId = initializeProject(template.id)
                      navigate(`/builder/${projectId}`)
                    }}
                  >
                    Use template
                  </Button>
                  {/* <Link to={`/edit/`}></Link> */}
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
