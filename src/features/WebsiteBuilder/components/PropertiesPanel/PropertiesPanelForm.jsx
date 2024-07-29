import { styled } from '@mui/material'
import { useWebsiteBuilder } from '../../hooks/useWebsiteBuilder/useWebsiteBuilder'
import { nodeTypeFormComponentMap } from './constants/nodeTypeFormComponentMap'

// this hook implements the functionalities of PropertiesPanelForm
const usePropertiesPanelForm = () => {
  const { websiteBuilderState, selectedNodes, deleteNode, editNodeData } =
    useWebsiteBuilder()
  // if exactly one node is selected only then properties panel form should be visible
  const propertiesPanelFormVisible = selectedNodes.length === 1 ? true : false

  // if propertiesPanelFormVisible is not visible we won't need any data
  if (propertiesPanelFormVisible === false)
    return { propertiesPanelFormVisible }

  // details of the selected node
  const selectedNodeDetails = selectedNodes[0]

  // type of the selected node
  const selectedNodeType = selectedNodeDetails.type

  // depending on the selected node type, it determines which FormComponent to show
  const FormComponent = nodeTypeFormComponentMap[selectedNodeType]

  /**
   * call the function with new values to update selected node's data
   *
   * @params {Object} values: pass the latest values to replace the old values
   */
  const handleFormChange = (values) =>
    editNodeData(selectedNodeDetails.id, values)

  return {
    websiteBuilderState,
    deleteNode,

    propertiesPanelFormVisible,
    selectedNodeDetails,
    selectedNodeType,
    FormComponent,
    handleFormChange,
  }
}

const PropertiesPanelEditForm = () => {
  const {
    websiteBuilderState,
    deleteNode,
    propertiesPanelFormVisible,
    selectedNodeDetails,
    FormComponent,
    handleFormChange,
  } = usePropertiesPanelForm()

  return (
    <StyledPropertiesPanelEditForm>
      {/* if propertiesPanelFormVisible is true show the form component */}
      {propertiesPanelFormVisible && (
        <FormComponent
          // passing the current selected node data so the form can show it
          id={selectedNodeDetails.id}
          data={selectedNodeDetails.data}
          websiteBuilderState={websiteBuilderState}
          // when the form value changes it calls the onChange callback function with new values
          onChange={handleFormChange}
          onDeleteNode={deleteNode}
        />
      )}
    </StyledPropertiesPanelEditForm>
  )
}

export default PropertiesPanelEditForm

const StyledPropertiesPanelEditForm = styled('div')({
  padding: '20px 10px',
  borderBottom: '1px solid #d8d8d8',
})
