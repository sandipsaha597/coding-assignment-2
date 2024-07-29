import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNodes } from '../../hooks/useNodes/useNodes'
import PropertiesPanelEditForm from './PropertiesPanelForm'
import PropertiesPanelHeader from './PropertiesPanelHeader'
import { zIndexManagement } from '../../../shared/constants/zIndexManagement'
import { propertiesPanelTypeToTitleMap } from './constants/propertiesPanelTypeToTitleMap'

const usePropertiesPanel = () => {
  const { selectedNodes } = useNodes()
  const [propertiesPanelShow, setPropertiesPanelShow] = useState(false)

  useEffect(() => {
    /* if exactly one node is selected, properties panel will be shown
    by pressing ctrl/cmd + shift user can do multi-selection (not implemented yet) */
    if (selectedNodes.length === 1) {
      setPropertiesPanelShow(true)
    } else {
      setPropertiesPanelShow(false)
    }
  }, [selectedNodes])
  return { selectedNodes, propertiesPanelShow, setPropertiesPanelShow }
}

const PropertiesPanel = () => {
  const { selectedNodes, propertiesPanelShow, setPropertiesPanelShow } =
    usePropertiesPanel()

  return (
    <StyledPropertiesPanel propertiesPanelShow={propertiesPanelShow}>
      <PropertiesPanelHeader
        // properties panel header title should be different for different node types
        title={propertiesPanelTypeToTitleMap[selectedNodes[0]?.type]}
        // hiding the properties panel upon back arrow button click
        hidePropertiesPanel={() => setPropertiesPanelShow(false)}
      />
      <PropertiesPanelEditForm />
    </StyledPropertiesPanel>
  )
}

export default PropertiesPanel

const StyledPropertiesPanel = styled('section')(({ propertiesPanelShow }) => ({
  background: '#fff',
  position: 'absolute',
  width: '100%',
  height: '100%',
  transform: propertiesPanelShow ? 'translate(0%, 0)' : 'translate(-100%, 0)',
  transition: '.4s ease-in-out',
  zIndex: zIndexManagement.propertiesPanel,
  overflowY: 'scroll',
}))
