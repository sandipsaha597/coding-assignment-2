import { availableFonts } from '../../../constants'

export const getFontFamiliesUsedInProject = (project) => {
  const globalFontFamily =
    project.themeAndGlobalStyles.globalStyles.fontFamily.value

  const pages = project.pages
  const fontsInNodes = []

  for (let i = 0; i < pages.length; i++) {
    const nodes = pages[i].nodes
    for (let j = 0; j < nodes.length; j++) {
      /* The below code won't break because every valid page and node structure 
        has all the values below */
      // debugger
      const font = pages[i].nodes[j].data.styles?.fontFamily?.value

      if (font) fontsInNodes.push(font)
    }
  }
  const fonts = [...new Set([globalFontFamily, ...fontsInNodes])]

  const fontsArrayObjects = availableFonts.filter((item) =>
    fonts.includes(item.font)
  )

  return fontsArrayObjects
}
