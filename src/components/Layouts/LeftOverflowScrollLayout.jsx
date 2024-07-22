import { Box } from '@mui/material'

const LeftOverflowScrollLayout = ({ left: Left, right: Right }) => {
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
          overflowX: 'scroll',
          padding: '5px',
        }}
      >
        {Left}
      </Box>
      <div>{Right}</div>
    </Box>
  )
}

export default LeftOverflowScrollLayout
