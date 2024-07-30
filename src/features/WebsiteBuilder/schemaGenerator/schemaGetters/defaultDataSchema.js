import { BUTTON_VARIANTS } from '../types/buttonVariants'
import { COLOR_TYPES } from '../types/colorTypes'
import { FONT_FAMILY_TYPES } from '../types/fontFamilyTypes'
import { getColorStructure } from './getColorStructure'
import { getFontFamilyStructure } from './getFontFamilyStructure'

export const textNodeDefaultDataObj = {
  textMessage: 'Text message',
  styles: {
    fontFamily: getFontFamilyStructure({
      type: FONT_FAMILY_TYPES.INHERIT,
      value: 'inherit',
    }),
    fontSize: 16,
    color: getColorStructure({
      type: COLOR_TYPES.CUSTOM,
      value: '#34495e',
    }),
  },
}

export const imageNodeDefaultDataObj = {
  src: 'https://placehold.co/300x300',
  alt: 'dummy image',
  styles: {},
}

export const videoNodeDefaultDataObj = {
  src: 'https://videos.pexels.com/video-files/17127360/17127360-uhd_2560_1440_30fps.mp4',
  title: 'Dummy video',
  styles: {},
}

export const buttonNodeDefaultDataObj = {
  buttonText: 'Click',
  action: {
    buttonActionType: '',
    /* this value can be any serializable value. Consider storing an array or object 
    to handle multiple inputs instead of adding more field */
    buttonActionValue: '',
  },
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
      type: FONT_FAMILY_TYPES.INHERIT,
      value: 'inherit',
    }),
    fontSize: 15,
    variant: BUTTON_VARIANTS.OUTLINED,
  },
}
