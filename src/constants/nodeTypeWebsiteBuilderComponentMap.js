import ButtonNodeInWebsiteBuilder from '../features/WebsiteBuilder/components/ReactFlowNodes/ButtonNode/ButtonNodeInReactFlow'
import ImageNodeInReactFlow from '../features/WebsiteBuilder/components/ReactFlowNodes/ImageNode/ImageNodeInReactFlow'
import TextNodeInWebsiteBuilder from '../features/WebsiteBuilder/components/ReactFlowNodes/TextNode/TextNodeInWebsiteBuilder'
import VideoNodeInWebsiteBuilder from '../features/WebsiteBuilder/components/ReactFlowNodes/VideoNode/VideoNodeInReactFlow'
import { NODE_TYPE_MAP } from './nodeTypesMap'

export const nodeTypeWebsiteBuilderComponentMap = {
  [NODE_TYPE_MAP.TEXT_NODE]: TextNodeInWebsiteBuilder,
  [NODE_TYPE_MAP.IMAGE_NODE]: ImageNodeInReactFlow,
  [NODE_TYPE_MAP.VIDEO_NODE]: VideoNodeInWebsiteBuilder,
  [NODE_TYPE_MAP.BUTTON_NODE]: ButtonNodeInWebsiteBuilder,
}
