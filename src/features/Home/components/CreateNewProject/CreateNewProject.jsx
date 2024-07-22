import { Box, Paper, Typography } from '@mui/material'
import { useInitializeProjectAndRedirect } from '../../../../hooks/useInitializeProjectAndRedirect/useInitializeProjectAndRedirect'
import { AddCircle } from '@mui/icons-material'

const CreateNewProject = () => {
  const { initializeProjectAndRedirect } = useInitializeProjectAndRedirect()
  return (
    <Paper
      elevation={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pb: 4,
        height: '200px',
        cursor: 'pointer',
      }}
      onClick={() => initializeProjectAndRedirect()}
    >
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <AddCircle sx={{ fontSize: '60px', color: 'dodgerblue' }} />
      </Box>
      <Box>
        <Typography>Create new project</Typography>
      </Box>
    </Paper>
  )
}

export default CreateNewProject
