import { NODE_TYPE_MAP } from '../../../../shared/constants/nodeTypesMap'
import ButtonNodeEditForm from '../../WebsiteBuilderNodeEditForms/ButtonNodeEditForm/ButtonNodeEditForm'
import ImageNodeEditForm from '../../WebsiteBuilderNodeEditForms/ImageNodeEditForm/ImageNodeEditForm'
import TextNodeEditForm from '../../WebsiteBuilderNodeEditForms/TextNodeEditForm/TextNodeEditForm'
import VideoNodeEditForm from '../../WebsiteBuilderNodeEditForms/VideoNodeEditForm/VideoNodeEditForm'

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
