import ButtonNodeInWebsiteBuilder from '../../WebsiteBuilder/components/WebsiteBuilderNodes/ButtonNode/ButtonNodeInWebsiteBuilder'
import ImageNodeInWebsiteBuilder from '../../WebsiteBuilder/components/WebsiteBuilderNodes/ImageNode/ImageNodeInWebsiteBuilder'
import TextNodeInWebsiteBuilder from '../../WebsiteBuilder/components/WebsiteBuilderNodes/TextNode/TextNodeInWebsiteBuilder'
import VideoNodeInWebsiteBuilder from '../../WebsiteBuilder/components/WebsiteBuilderNodes/VideoNode/VideoNodeInWebsiteBuilder'
import { NODE_TYPE_MAP } from './nodeTypesMap'

/*
 * Maps the node types to components. It tells WebsiteBuilderCanvas which component
 * should be shown for each node type. Passed in the nodeTypes prop of WebsiteBuilderCanvas.
 */
export const nodeTypeWebsiteBuilderComponentMap = {
  [NODE_TYPE_MAP.TEXT_NODE]: TextNodeInWebsiteBuilder,
  [NODE_TYPE_MAP.IMAGE_NODE]: ImageNodeInWebsiteBuilder,
  [NODE_TYPE_MAP.VIDEO_NODE]: VideoNodeInWebsiteBuilder,
  [NODE_TYPE_MAP.BUTTON_NODE]: ButtonNodeInWebsiteBuilder,
}
