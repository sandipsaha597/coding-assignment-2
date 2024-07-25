import SaveOutlinedIconMUI from '@mui/icons-material/SaveOutlined'
import { Button, styled, useMediaQuery, useTheme } from '@mui/material'
import { memo } from 'react'
import { rightSidePanelWidth } from '../../constants'

// memoized header to prevent unnecessary re-renders
const Header = memo(function Header() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <StyledHeader>
      <Button
        variant="contained"
        size="small"
        sx={{
          gridArea: 'button',
        }}
        onClick={() => {}}
      >
        {matches ? (
          'Save As Template'
        ) : (
          <SaveOutlinedIconMUI fontSize="small" />
        )}
      </Button>
    </StyledHeader>
  )
})

export default Header

const StyledHeader = styled('header')(({ theme }) => {
  return {
    display: 'grid',
    gridArea: 'header',
    background: '#f3f3f3',
    placeItems: 'center',
    gridTemplateAreas: `'. button'`,

    gridTemplateColumns: `1fr ${rightSidePanelWidth.sm}`,
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: `1fr ${rightSidePanelWidth.md}`,
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: `1fr ${rightSidePanelWidth.lg}`,
    },
  }
})
