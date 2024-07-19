import { styled } from '@mui/material'

const Disable = styled('div')({
  width: '100%',
  height: '100%',
  '&::after': {
    content: `''`,
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
})

export default Disable
