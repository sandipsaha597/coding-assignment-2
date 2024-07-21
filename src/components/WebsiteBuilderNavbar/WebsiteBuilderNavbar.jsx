import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

//  navbar.styles = {
//   background: 'red',
//   itemColor: 'white',
//   activeItemColor: 'green',
//   gap: '10px',
//   margin: 'auto',
// }
export const WebsiteBuilderNavbar = ({ navbar }) => {
  const navbarStyles = navbar.styles
  const navbarItems = navbar.items
  return (
    <StyledWebsiteBuilderNavbar navbarStyles={navbarStyles}>
      {navbarItems.map((v) => (
        <NavLink
          key={v.id}
          className={({ isActive }) =>
            isActive ? 'website-builder-navbar-active' : ''
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
