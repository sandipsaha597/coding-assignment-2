import { Route, Routes } from 'react-router-dom'
import { WebsiteBuilderNavbar } from '../../shared/components/WebsiteBuilderNavbar/WebsiteBuilderNavbar'
import PageView from './PageView'
import { GoogleFontLoader } from '../../../customLibraries/GoogleFontLoader'
import GlobalStyleWrapper from '../../shared/components/containers/GlobalStyleWrapper'
import { getFontFamiliesUsedInProject } from '../functions/getFontFamiliesUsedInProject'
import { renderMode } from '../../shared/constants/renderMode'

const Preview = ({ project }) => {
  const pages = project.pages
  const navbar = project.navbar
  const fontsGettingUsedInProject = getFontFamiliesUsedInProject(project)
  return (
    <GlobalStyleWrapper project={project}>
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
    </GlobalStyleWrapper>
  )
}

export default Preview
