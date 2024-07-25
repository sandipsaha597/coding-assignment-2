import FormatColorTextIconMUI from '@mui/icons-material/FormatColorText'
import ImageOutlinedIconMUI from '@mui/icons-material/ImageOutlined'
import SmartButtonOutlinedIconMUI from '@mui/icons-material/SmartButtonOutlined'
import VideoCameraBackOutlinedIconMUI from '@mui/icons-material/VideoCameraBackOutlined'
import { NODE_TYPE_MAP } from '../../../../constants'
import {
  COLOR_TYPES,
  getColorStructure,
} from '../../../../store/projectAndTemplatesSlice/projectsAndTemplatesSlice'

// list of nodes currently available is the app and shown in the nodes panel

export const FONT_FAMILY_TYPES = {
  CUSTOM: 'CUSTOM',
  INHERIT: 'INHERIT',
}
const getFontFamilyStructure = ({
  type = FONT_FAMILY_TYPES.CUSTOM,
  value = 'Arial, sans-serif',
  temp = '',
}) => {
  return {
    type,
    value,
    temp,
  }
}

export const BUTTON_VARIANTS = {
  OUTLINED: 'outlined',
  CONTAINED: 'contained',
}
export const nodesInNodesPanel = [
  {
    id: crypto.randomUUID(),
    nodeType: NODE_TYPE_MAP.TEXT_NODE,
    icon: <FormatColorTextIconMUI fontSize="large" />,
    text: 'Text message',
    defaultData: {
      textMessage: 'Text message',
      styles: {
        fontFamily: getFontFamilyStructure({
          type: FONT_FAMILY_TYPES.CUSTOM,
          value: 'Arial, sans-serif',
        }),
        fontSize: 16,
        color: getColorStructure({
          type: COLOR_TYPES.CUSTOM,
          value: '#34495e',
        }),
      },
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
      styles: {},
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
      styles: {},
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
      styles: {
        textColor: getColorStructure({
          type: COLOR_TYPES.CUSTOM,
          value: '#111827',
        }),
        buttonColor: getColorStructure({
          type: COLOR_TYPES.CUSTOM,
          value: '#d1d5db',
        }),
        fontFamily: getFontFamilyStructure({
          type: FONT_FAMILY_TYPES.CUSTOM,
          value: 'Arial, sans-serif',
        }),
        fontSize: 15,
        variant: BUTTON_VARIANTS.OUTLINED,
      },
    },
    defaultWidth: 100,
    defaultHeight: 36,
  },
]
