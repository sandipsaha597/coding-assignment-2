import ButtonNodeEditForm from '../features/WebsiteBuilder/components/ReactFlowNodeEditForms/ButtonNodeEditForm/ButtonNodeEditForm'
import ImageNodeEditForm from '../features/WebsiteBuilder/components/ReactFlowNodeEditForms/ImageNodeEditForm/ImageNodeEditForm'
import TextNodeEditForm from '../features/WebsiteBuilder/components/ReactFlowNodeEditForms/TextNodeEditForm/TextNodeEditForm'
import VideoNodeEditForm from '../features/WebsiteBuilder/components/ReactFlowNodeEditForms/VideoNodeEditForm/VideoNodeEditForm'
import { NODE_TYPE_MAP } from './nodeTypesMap'

/**
 * Maps node types to their corresponding form components.
 * All form components should follow a specific structure:
 * - They should take the data through props.data and display it in the form inputs.
 * - They should call the props.onChange callback function with the new values
 *   (the whole data object to be set as the selected node's data).
 */
export const nodeTypeFormComponentMap = {
  [NODE_TYPE_MAP.TEXT_NODE]: TextNodeEditForm,
  [NODE_TYPE_MAP.IMAGE_NODE]: ImageNodeEditForm,
  [NODE_TYPE_MAP.VIDEO_NODE]: VideoNodeEditForm,
  [NODE_TYPE_MAP.BUTTON_NODE]: ButtonNodeEditForm,
}
