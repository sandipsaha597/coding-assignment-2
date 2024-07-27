import { Grid, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'
import { detectDuplicateSlug } from './duplicateSlugDetect'

const PageDetailsEditInputs = ({ pages, index, onDataChange }) => {
  const page = pages[index]
  const pageTitle = page.pageDetails.title
  const pageDescription = page.pageDetails.description
  const pageSlug = page.pageDetails.slug

  const [slugErrText, setSlugErrText] = useState('')
  const validCharRegex = /^[a-zA-Z0-9-]*$/

  const handlePageDataChange = (pageId, key, value) => {
    if (key === 'slug') {
      if (!validCharRegex.test(value)) {
        setSlugErrText('Only Alphabets, numbers and hyphens are allowed')
        return
      }

      const [, index] = detectDuplicateSlug(value, pageId, pages)
      const isDuplicate = index === -1 ? false : true
      if (isDuplicate) {
        setSlugErrText('Duplicate slug detected')
        return
      }
      setSlugErrText('')
    }
    const details = {
      ...page.pageDetails,
      [key]: value,
    }
    onDataChange(pageId, details)
  }
  return (
    <Grid
      key={page.id}
      item
      xs={12}
      sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
    >
      <TextField
        label="Page name"
        value={pageTitle}
        fullWidth
        size="small"
        onChange={(e) => handlePageDataChange(page.id, 'title', e.target.value)}
      />
      <TextField
        label="Page description"
        value={pageDescription}
        fullWidth
        multiline
        rows={4}
        size="small"
        onChange={(e) =>
          handlePageDataChange(page.id, 'description', e.target.value)
        }
      />
      <TextField
        label="Page slug"
        defaultValue={pageSlug}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ marginRight: '1px' }}>
              /
            </InputAdornment>
          ),
        }}
        fullWidth
        size="small"
        disabled={index === 0}
        onChange={(e) => handlePageDataChange(page.id, 'slug', e.target.value)}
        error={!!slugErrText}
        helperText={slugErrText}
      />
    </Grid>
  )
}

export default PageDetailsEditInputs
