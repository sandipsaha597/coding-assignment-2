import { styled } from '@mui/material'
import { useWebsiteBuilder } from '../../hooks/useWebsiteBuilder/useWebsiteBuilder'
import { nodeTypeFormComponentMap } from '../../../../constants/nodeTypeFormComponentMap'

// this hook implements the functionalities of SettingsPanelForm
const useSettingsPanelForm = () => {
  const { websiteBuilderState, selectedNodes, editNodeData } =
    useWebsiteBuilder()
  // if exactly one node is selected only then settings panel form should be visible
  const settingsPanelFormVisible = selectedNodes.length === 1 ? true : false

  // if settingsPanelFormVisible is not visible we won't need any data
  if (settingsPanelFormVisible === false) return { settingsPanelFormVisible }

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

    settingsPanelFormVisible,
    selectedNodeDetails,
    selectedNodeType,
    FormComponent,
    handleFormChange,
  }
}

const SettingsPanelEditForm = () => {
  const {
    websiteBuilderState,

    settingsPanelFormVisible,
    selectedNodeDetails,
    FormComponent,
    handleFormChange,
  } = useSettingsPanelForm()

  return (
    <StyledSettingsPanelEditForm>
      {/* if settingsPanelFormVisible is true show the form component */}
      {settingsPanelFormVisible && (
        <FormComponent
          // passing the current selected node data so the form can show it
          data={selectedNodeDetails.data}
          websiteBuilderState={websiteBuilderState}
          // when the form value changes it calls the onChange callback function with new values
          onChange={handleFormChange}
        />
      )}
    </StyledSettingsPanelEditForm>
  )
}

export default SettingsPanelEditForm

const StyledSettingsPanelEditForm = styled('div')({
  padding: '20px 10px',
  borderBottom: '1px solid #d8d8d8',
})
