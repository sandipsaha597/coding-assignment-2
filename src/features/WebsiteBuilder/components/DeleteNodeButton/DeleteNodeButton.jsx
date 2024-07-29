import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@mui/material'

const DeleteNodeButton = ({ id, onDeleteNode }) => {
  return (
    <Button
      color="error"
      variant="contained"
      onClick={() => onDeleteNode(id)}
      fullWidth
      endIcon={<DeleteIcon />}
    >
      Delete Node
    </Button>
  )
}

export default DeleteNodeButton
