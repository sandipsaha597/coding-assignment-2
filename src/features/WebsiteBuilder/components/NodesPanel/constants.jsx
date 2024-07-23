import FormatColorTextIconMUI from '@mui/icons-material/FormatColorText'
import ImageOutlinedIconMUI from '@mui/icons-material/ImageOutlined'
import NavigationOutlinedIconMUI from '@mui/icons-material/NavigationOutlined'
import SmartButtonOutlinedIconMUI from '@mui/icons-material/SmartButtonOutlined'
import VideoCameraBackOutlinedIconMUI from '@mui/icons-material/VideoCameraBackOutlined'
import { NODE_TYPE_MAP } from '../../../../constants'
import { formGroupClasses } from '@mui/material'

// list of nodes currently available is the app and shown in the nodes panel
export const nodesInNodesPanel = [
  {
    id: crypto.randomUUID(),
    nodeType: NODE_TYPE_MAP.TEXT_NODE,
    icon: <FormatColorTextIconMUI fontSize="large" />,
    text: 'Text message',
    defaultData: {
      textMessage: 'Text message',
      fontFamily: 'inherit',
      fontSize: 16,
      color: 'inherit',
    },
    defaultWidth: 300,
    defaultHeight: 'auto',
  },
  {
    id: crypto.randomUUID(),
    nodeType: NODE_TYPE_MAP.IMAGE_NODE,
    icon: <ImageOutlinedIconMUI fontSize="large" />,
    text: 'Image',
    defaultData: {
      src: 'https://placehold.co/300x300',
      alt: 'dummy image',
    },
    defaultWidth: 300,
    defaultHeight: 300,
  },
  {
    id: crypto.randomUUID(),
    nodeType: NODE_TYPE_MAP.VIDEO_NODE,
    icon: <VideoCameraBackOutlinedIconMUI fontSize="large" />,
    text: 'Video',
    defaultData: {
      src: 'https://videos.pexels.com/video-files/17127360/17127360-uhd_2560_1440_30fps.mp4',
      title: 'Dummy video',
    },

    defaultWidth: 320,
    defaultHeight: 150,
  },
  {
    id: crypto.randomUUID(),
    nodeType: NODE_TYPE_MAP.BUTTON_NODE,
    icon: <SmartButtonOutlinedIconMUI fontSize="large" />,
    text: 'Button',
    defaultData: {
      buttonText: 'Click',
      fontFamily: 'inherit',
      color: 'inherit',
      fontSize: 14,
    },
    defaultWidth: 100,
    defaultHeight: 30,
  },
]
