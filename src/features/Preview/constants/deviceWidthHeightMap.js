import { devices } from './devices'
import {
  laptopWidthHeight,
  phoneWidthAndHeight,
  tabletWidthAndHeight,
} from './widthAndHeightOfDevices'

export const deviceWidthHeightMap = {
  [devices.laptop]: laptopWidthHeight,
  [devices.tablet]: tabletWidthAndHeight,
  [devices.phone]: phoneWidthAndHeight,
}
