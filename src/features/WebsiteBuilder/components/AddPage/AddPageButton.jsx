import { Button } from '@mui/material'
import { usePages } from '../../hooks/usePages/usePages'

const AddPageButton = () => {
  const { addPage } = usePages()
  return (
    <Button
      onClick={addPage}
      variant="contained"
      sx={{ whiteSpace: 'nowrap', pointerEvents: 'auto' }}
    >
      + Add Page
    </Button>
  )
}

export default AddPageButton
