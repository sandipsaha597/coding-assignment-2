import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { renderMode } from '../../constants'
import { usePages } from '../../features/WebsiteBuilder/hooks/usePages/usePages'

//  navbar.styles = {
//   background: 'red',
//   itemColor: 'white',
//   activeItemColor: 'green',
//   gap: '10px',
//   margin: 'auto',
// }
export const WebsiteBuilderNavbar = ({ navbar, mode }) => {
  const { activePage } = usePages()
  const activePageId = activePage.id
  const navbarStyles = navbar.styles
  const navbarItems = navbar.items

  const editorPreview = {
    isActiveFunc(isActive, to) {
      if (mode === renderMode.editor && activePageId === to) return true
      if (mode === renderMode.previewOrLive && isActive) return true
    },
  }

  return (
    <StyledWebsiteBuilderNavbar navbarStyles={navbarStyles}>
      {navbarItems.map((v) => (
        <NavLink
          key={v.id}
          className={({ isActive }) =>
            editorPreview.isActiveFunc(isActive, v.to)
              ? 'website-builder-navbar-active'
              : ''
          }
          to={v.to}
          end
        >
          {v.title}
        </NavLink>
      ))}
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
