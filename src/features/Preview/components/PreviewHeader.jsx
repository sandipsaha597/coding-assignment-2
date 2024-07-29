import { Box, Typography } from '@mui/material'
import DeviceSelection from './DeviceSelection'

const PreviewPageHeader = ({ selectedDevice, setSelectedDevice }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        background: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 1,
        px: 2,
        // position: 'sticky',
        // top: 0,
      }}
    >
      <Box>
        <Typography component="h1" variant="h5">
          Preview Mode
        </Typography>
      </Box>
      <Box>
        <DeviceSelection
          selectedDevice={selectedDevice}
          onChange={setSelectedDevice}
        />
      </Box>
    </Box>
  )
}

export default PreviewPageHeader
