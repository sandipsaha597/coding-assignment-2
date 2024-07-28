import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { homePageId } from '../../../schemaGenerator/constants'
import { useMemo } from 'react'
import { doesItemExist } from '../../../../../utils/functions'
import { usePages } from '../../../hooks/usePages/usePages'

const PagesDropdown = ({ value, onChange }) => {
  const { pages } = usePages()

  const doesPageExist = useMemo(
    () => doesItemExist(value, pages),
    [value, pages]
  )

  return (
    <FormControl fullWidth>
      <InputLabel>To</InputLabel>
      <Select
        value={doesPageExist ? value : homePageId}
        label="To"
        onChange={onChange}
      >
        {pages.map((page) => {
          const pageId = page.id
          const { title, slug } = page.pageDetails
          return (
            <MenuItem key={pageId} value={pageId}>
              {`${title} -  /${slug}`}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default PagesDropdown
