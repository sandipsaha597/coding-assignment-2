import { Button, styled, useMediaQuery, useTheme } from '@mui/material'
import { memo } from 'react'
import { rightSidePanelWidth } from '../../constants'
import SaveOutlinedIconMUI from '@mui/icons-material/SaveOutlined'
import { toast } from '../../../../customLibraries/MyReactToastify/toast'
import { validationBeforeSave } from '../../../../core/validationFunctions/validationBeforeSave'
import { saveProjectsAndTemplatesToLocalStorage } from '../../../../core/utilFunctions'

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
        onClick={() => {
          // validating the form before saving
          const [isValid] = validationBeforeSave()
          if (isValid === false) {
            // if validation fails it show user an error message
            toast.error('Cannot save flow')
            return
          }
          // save the flow to localStorage
          const [isFlowSaved, message] =
            saveProjectsAndTemplatesToLocalStorage()
          if (isFlowSaved) {
            // if saving succeeds it shows user a success message
            toast.success(message)
            return
          }
          // if saving fails it shows user an error message
          toast.error(message)
        }}
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
