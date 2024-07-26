import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { renderMode } from '../../constants/renderMode'
import { getActivePage, getPageById } from '../../core/utilFunctions'
import { getColor } from '../../features/WebsiteBuilder/schemaGenerator/valueGetters/getColor'

//  navbar.styles = {
//   background: getColorStructure(),
//   itemColor: getColorStructure(),
//   activeItemColor: getColorStructure(),
//   gap: '10px',
//   margin: 'auto',
// }
export const WebsiteBuilderNavbar = ({ navbar, pages, mode, project }) => {
  const [activePage] = getActivePage(pages)
  const activePageId = activePage.id
  const navbarStyles = navbar.styles
  const navbarItems = navbar.items

  const editorPreview = {
    isActiveFunc(isActive, to) {
      // debugger
      if (mode === renderMode.editor && activePageId === to) return true
      if (mode === renderMode.previewOrLive && isActive) return true
      return false
    },
  }

  return (
    <StyledWebsiteBuilderNavbar navbarStyles={navbarStyles} project={project}>
      {navbarItems.map((v) => {
        const [page] = getPageById(v.to, pages)
        const pageSlug = page.pageDetails.slug
        return (
          <NavLink
            key={v.id}
            className={({ isActive }) =>
              editorPreview.isActiveFunc(isActive, v.to)
                ? 'website-builder-navbar-active'
                : ''
            }
            to={pageSlug}
            end
          >
            {v.title}
          </NavLink>
        )
      })}
    </StyledWebsiteBuilderNavbar>
  )
}

const StyledWebsiteBuilderNavbar = styled('nav')(
  ({ navbarStyles, project }) => {
    return {
      backgroundColor: getColor(
        navbarStyles.backgroundColor,
        project.themeAndGlobalStyles.theme
      ),
      gap: navbarStyles.gap,
      a: {
        color: getColor(
          navbarStyles.itemColor,
          project.themeAndGlobalStyles.theme
        ),
      },
      '.website-builder-navbar-active': {
        color: getColor(
          navbarStyles.activeItemColor,
          project.themeAndGlobalStyles.theme
        ),
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50px',
      width: '100%',
    }
  }
)
