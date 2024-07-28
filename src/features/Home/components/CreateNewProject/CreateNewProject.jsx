import { Box, Paper, Typography } from '@mui/material'
import { useInitializeProjectAndRedirect } from '../../../../hooks/useInitializeProjectAndRedirect/useInitializeProjectAndRedirect'
import { AddCircle } from '@mui/icons-material'

const CreateNewProject = () => {
  const { initializeProjectAndRedirect } = useInitializeProjectAndRedirect()
  return (
    <Paper
      elevation={2}
      sx={{
        textAlign: 'center',
        pb: 4,
        cursor: 'pointer',
      }}
      onClick={() => initializeProjectAndRedirect()}
    >
      <Box sx={{ padding: 8 }}>
        <AddCircle sx={{ fontSize: '60px', color: 'dodgerblue' }} />
      </Box>
      <Box>
        <Typography>Create new project</Typography>
      </Box>
    </Paper>
  )
}

export default CreateNewProject
