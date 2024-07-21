import { styled } from '@mui/material'
import NavigationSettings from '../NavigationSettings/NavigationSettings'
import NodesInPanelList from './NodesInPanelList'

// const styles = {
//   background: 'red',
//   itemColor: 'white',
//   activeItemColor: 'green',
//   gap: '10px',
//   margin: 'auto',
// }

const NodesPanel = () => {
  return (
    <StyledNodesPanel>
      <NodesInPanelList />
      <NavigationSettings />
    </StyledNodesPanel>
  )
}

export default NodesPanel

const StyledNodesPanel = styled('section')({
  padding: '10px',
  overflowY: 'scroll',
  height: '100%',
})
