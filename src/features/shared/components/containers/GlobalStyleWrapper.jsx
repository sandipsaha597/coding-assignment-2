import { Box } from '@mui/material'
import { getFontFamily } from '../../../WebsiteBuilder/schemaGenerator/valueGetters/getFontFamily'

const GlobalStyleWrapper = ({ project, children }) => {
  const { globalStyles } = project.themeAndGlobalStyles
  return (
    <Box
      sx={{
        fontFamily: getFontFamily(globalStyles.fontFamily),
        color: globalStyles.color,
        backgroundColor: globalStyles.backgroundColor,
      }}
    >
      {children}
    </Box>
  )
}

export default GlobalStyleWrapper
