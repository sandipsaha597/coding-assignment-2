import { useMemo } from 'react'
import { getColor } from '../schemaGenerator/valueGetters/getColor'

export const useColor = (colorStructure, project) => {
  const color = useMemo(
    () => getColor(colorStructure, project.themeAndGlobalStyles.theme),
    [colorStructure, project.themeAndGlobalStyles.theme]
  )
  return color
}
