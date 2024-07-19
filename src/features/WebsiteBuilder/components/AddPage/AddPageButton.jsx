import { Button } from '@mui/material'
import { useWebsiteBuilder } from '../../hooks/useWebsiteBuilder/useWebsiteBuilder'

const AddPageButton = () => {
  const { addPage } = useWebsiteBuilder()
  return (
    <Button onClick={addPage} variant="outlined" sx={{ whiteSpace: 'nowrap' }}>
      + Add Page
    </Button>
  )
}

export default AddPageButton