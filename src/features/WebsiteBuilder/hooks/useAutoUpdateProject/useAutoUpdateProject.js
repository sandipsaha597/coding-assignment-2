import { useSelector } from 'react-redux'
import { useProjectsAndTemplates } from '../../../../hooks/useProjectsAndTemplates/useProjectsAndTemplates'
import { useEffect, useMemo } from 'react'
import { debounce } from '@mui/material'
import { websiteBuilderSelector } from '../../redux/websiteBuilderSlice'

export const useAutoUpdateProject = () => {
  const websiteBuilderState = useSelector(websiteBuilderSelector)

  const { updateProject } = useProjectsAndTemplates()

  const debounceUpdateProject = useMemo(
    () => debounce(updateProject, 1000),
    [updateProject]
  )

  useEffect(() => {
    debounceUpdateProject(websiteBuilderState)
  }, [websiteBuilderState, debounceUpdateProject])
}
