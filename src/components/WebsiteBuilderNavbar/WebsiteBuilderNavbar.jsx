import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { renderMode } from '../../constants'
import { usePages } from '../../features/WebsiteBuilder/hooks/usePages/usePages'
import { getActivePage, getPageById } from '../../core/utilFunctions'

//  navbar.styles = {
//   background: 'red',
//   itemColor: 'white',
//   activeItemColor: 'green',
//   gap: '10px',
//   margin: 'auto',
// }
export const WebsiteBuilderNavbar = ({ navbar, pages, mode }) => {
  const [activePage] = getActivePage(pages)
  const activePageId = activePage.id
  const navbarStyles = navbar.styles
  const navbarItems = navbar.items

  const editorPreview = {
    isActiveFunc(isActive, to) {
      if (mode === renderMode.editor && activePageId === to) return true
      if (mode === renderMode.previewOrLive && isActive) return true
      return false
    },
  }

  return (
    <StyledWebsiteBuilderNavbar navbarStyles={navbarStyles}>
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

const StyledWebsiteBuilderNavbar = styled('nav')(({ navbarStyles }) => ({
  background: navbarStyles.background,
  gap: navbarStyles.gap,
  a: {
    color: navbarStyles.itemColor,
  },
  '.website-builder-navbar-active': {
    color: navbarStyles.activeItemColor,
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50px',
  width: '100%',
}))
