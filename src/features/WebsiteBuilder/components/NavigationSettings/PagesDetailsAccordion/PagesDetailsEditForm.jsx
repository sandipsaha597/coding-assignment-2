import { Grid } from '@mui/material'
import PageDetailsEditInputs from './PageDetailsEditInputs'
import { usePages } from '../../../hooks/usePages/usePages'

const PagesDetailsEditForm = () => {
  const { pages, updatePageDetails } = usePages()
  return (
    <Grid container spacing={3}>
      {pages.map((page, i) => {
        return (
          <PageDetailsEditInputs
            key={page.id}
            pages={pages}
            index={i}
            onDataChange={updatePageDetails}
          />
        )
      })}
    </Grid>
  )
}

export default PagesDetailsEditForm
