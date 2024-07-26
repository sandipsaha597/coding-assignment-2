import { Route, Routes } from 'react-router-dom'
import { renderMode } from '../../../constants/renderMode'
import { WebsiteBuilderNavbar } from '../../shared/components/WebsiteBuilderNavbar/WebsiteBuilderNavbar'
import PageView from './PageView'
import { availableFonts } from '../../../constants'
import { GoogleFontLoader } from '../../../customLibraries/GoogleFontLoader'

const getFontFamiliesUsedInProject = (project) => {
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

const Preview = ({ project }) => {
  const pages = project.pages
  const navbar = project.navbar
  const fontsGettingUsedInProject = getFontFamiliesUsedInProject(project)
  console.log(fontsGettingUsedInProject)
  return (
    <div>
      <WebsiteBuilderNavbar
        navbar={navbar}
        pages={pages}
        project={project}
        mode={renderMode.previewOrLive}
      />
      <Routes>
        {pages.map((page) => {
          return (
            <Route
              key={page.id}
              path={page.pageDetails.slug}
              element={<PageView page={page} project={project} />}
            />
          )
        })}
      </Routes>
      <GoogleFontLoader fonts={fontsGettingUsedInProject} />
    </div>
  )
}

export default Preview
