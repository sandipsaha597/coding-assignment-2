import ArrowBackIconMUI from '@mui/icons-material/ArrowBack'
import { IconButton, Typography, styled } from '@mui/material'

/**
 * PropertiesPanelHeader Component
 *
 * This component renders a header for the properties panel with a title and a back button.
 *
 * Props:
 * - `hidePropertiesPanel` (function): Callback function to hide the properties panel when the back button is clicked.
 * - `title` (string): The title to be displayed in the header. Defaults to an empty string.
 *
 * Usage:
 * ```
 * <PropertiesPanelHeader hidePropertiesPanel={handleHidePropertiesPanel} title="Properties" />
 * ```
 */
const PropertiesPanelHeader = ({ hidePropertiesPanel, title = '' }) => {
  return (
    <StyledPropertiesPanelHeader>
      <IconButton
        sx={{ position: 'absolute', left: 5, borderRadius: '4px' }}
        onClick={hidePropertiesPanel}
        size="small"
      >
        <ArrowBackIconMUI fontSize="small" />
      </IconButton>
      <Typography>{title}</Typography>
    </StyledPropertiesPanelHeader>
  )
}

export default PropertiesPanelHeader

const StyledPropertiesPanelHeader = styled('header')({
  borderBottom: '1px solid #d8d8d8',
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  gridTemplateRows: '40px auto',
})
