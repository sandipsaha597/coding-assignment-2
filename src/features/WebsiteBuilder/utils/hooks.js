import { useMemo } from 'react'
import { getColor2 } from './utils'

export const useColor = (colorStructure, project) => {
  const color = useMemo(
    () => getColor2(colorStructure, project.themeAndGlobalStyles.theme),
    [colorStructure, project.themeAndGlobalStyles.theme]
  )
  return color
}
