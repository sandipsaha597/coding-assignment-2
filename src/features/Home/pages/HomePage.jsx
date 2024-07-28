import { Container, Grid } from '@mui/material'
import CreateNewProject from '../components/CreateNewProject/CreateNewProject.jsx'
import ProjectsAndTemplates from '../components/ProjectsAndTemplates/ProjectsAndTemplates'

const HomePage = () => {
  return (
    <Container component="main" sx={{ py: 4 }}>
      <Grid container spacing={4} justifyContent={'center'}>
        <Grid item xs={12} sm={6} md={3}>
          <CreateNewProject />
        </Grid>
        <Grid item xs={12}>
          <ProjectsAndTemplates />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
