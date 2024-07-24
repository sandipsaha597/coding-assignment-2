import { Box } from '@mui/material'

// Text node to show in website
const ButtonNodeInWebsiteBuilder = ({ data }) => {
  const variant =
    data.variant === 'outlined'
      ? {
          backgroundColor: 'transparent',
          border: `2px solid ${data.backgroundColor}`,
        }
      : data.variant === 'contained'
      ? {
          backgroundColor: `${data.backgroundColor}`,
          border: `2px solid ${data.backgroundColor}`,
        }
      : {}

  return (
    <Box
      component={'button'}
      sx={{
        width: '100%',
        height: '100%',
        fontSize: data.fontSize,
        fontFamily: data.fontFamily,
        color: data.color,
        ...variant,
      }}
    >
      {data.buttonText}
    </Box>
  )
}

export default ButtonNodeInWebsiteBuilder
