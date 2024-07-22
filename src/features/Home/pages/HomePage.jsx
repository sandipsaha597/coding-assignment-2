import { Container, Grid } from '@mui/material'
import CreateNewProject from '../components/CreateNewProject/CreateNewProject.jsx'
import ProjectsAndTemplates from '../components/ProjectsAndTemplates/ProjectsAndTemplates'

const HomePage = () => {
  return (
    <Container component="main" sx={{ py: 4 }}>
      <Grid container direction="column">
        <Grid container item justifyContent="center">
          <Grid item xs={3}>
            <CreateNewProject />
          </Grid>
        </Grid>
        <Grid item>
          <ProjectsAndTemplates />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
