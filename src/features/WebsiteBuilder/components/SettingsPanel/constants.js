import { NODE_TYPE_MAP } from '../../../../constants'

// settings panel header title should be according to the node type selected
export const settingsPanelTypeToTitleMap = {
  [NODE_TYPE_MAP.TEXT_NODE]: 'Message',
  [NODE_TYPE_MAP.IMAGE_NODE]: 'Image',
  [NODE_TYPE_MAP.VIDEO_NODE]: 'Video',
  [NODE_TYPE_MAP.BUTTON_NODE]: 'Button',
}
