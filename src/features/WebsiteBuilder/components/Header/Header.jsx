import { Button, styled, TextField } from '@mui/material'
import { memo } from 'react'
import { useProject } from '../../hooks/useProject/useProject'
import { useProjectsAndTemplates } from '../../../../hooks/useProjectsAndTemplates/useProjectsAndTemplates'
import { store } from '../../../../store/store'
import { websiteBuilderSelector } from '../../redux/websiteBuilderSlice'
import PreviewButton from '../../../../components/PreviewButton/PreviewButton'

// memoized header to prevent unnecessary re-renders
const Header = memo(function Header() {
  // const theme = useTheme()
  // const matches = useMediaQuery(theme.breakpoints.up('md'))
  const { projectId, projectName, editProjectName } = useProject()
  const { saveAsTemplate } = useProjectsAndTemplates()

  return (
    <StyledHeader>
      <TextField
        size="small"
        label="Project name"
        value={projectName}
        onChange={(e) => editProjectName(e.target.value)}
      />
      <Button
        variant="contained"
        size="small"
        sx={{
          gridArea: 'button',
        }}
        onClick={() => saveAsTemplate(websiteBuilderSelector(store.getState()))}
      >
        Save As Template
        {/* {matches ? ( */}
        {/* ) : ( */}
        {/* // <SaveOutlinedIconMUI fontSize="small" /> */}
        {/* )} */}
      </Button>
      <PreviewButton id={projectId} variant="outlined" />
    </StyledHeader>
  )
})

export default Header

const StyledHeader = styled('header')(({ theme }) => {
  return {
    gridArea: 'header',
    background: '#f3f3f3',
    display: 'flex',
    gap: theme.spacing(3),
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
  }
})
