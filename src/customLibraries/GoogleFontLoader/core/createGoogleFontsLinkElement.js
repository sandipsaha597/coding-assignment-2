export const createGoogleFontsLinkElement = (fonts, subsets, display) => {
  const families = fonts
    .reduce((acc, font) => {
      const family = font.font.replace(/ +/g, '+')
      const weights = (font.weights || []).join(',')

      return [...acc, family + (weights && `:${weights}`)]
    }, [])
    .join('|')

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `https://fonts.googleapis.com/css?family=${families}`

  if (subsets && Array.isArray(subsets) && subsets.length > 0) {
    link.href += `&subset=${subsets.join(',')}`
  }

  if (display) {
    link.href += `&display=${display}`
  }

  return link
}
