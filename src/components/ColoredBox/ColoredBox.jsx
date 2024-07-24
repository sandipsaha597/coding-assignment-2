import { Paper, styled } from '@mui/material'

export const ColoredBox = styled(Paper)(({ color }) => ({
  width: '25px',
  aspectRatio: '1/1',
  backgroundColor: color,
}))
