import AddPageButton from './AddPageButton'
import Pages from './Pages'
import { Box } from '@mui/material'

const PagesAndAddPages = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          // maxWidth: '70%',
          overflowX: 'auto',
          padding: '5px',
        }}
      >
        <Pages />
      </Box>
      <Box sx={{}}>
        <AddPageButton />
      </Box>
    </Box>
  )
}

export default PagesAndAddPages
