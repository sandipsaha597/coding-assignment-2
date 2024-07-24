import { Typography, styled } from '@mui/material'
import { memo } from 'react'

// assuming all the nodes in nodes panel will have the same look only icon and text will vary
const NodeInNodesPanel = memo(function NodeInNodesPanel({ icon, text }) {
  return (
    <StyledNodeInNodesPanel>
      {icon}
      <Typography
        sx={(theme) => ({
          display: 'none',
          [theme.breakpoints.up('md')]: { display: 'block' },
        })}
      >
        {text}
      </Typography>
    </StyledNodeInNodesPanel>
  )
})

export default NodeInNodesPanel

// styles of the node in node panel
const StyledNodeInNodesPanel = styled('div')(({ theme }) => ({
  border: '2px solid #586089',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '100%',
  padding: '5px 5px',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: `16px 20px`,
  },
  boxSizing: 'border-box',
  fill: '#586089',
  color: '#586089',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))
