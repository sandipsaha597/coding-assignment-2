import { Box, IconButton } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { useCounter } from '../hooks/useCounter'

const Counter = ({ value, defaultValue, onChange, min, max }) => {
  const {
    count,
    isAdditionDisabled,
    isSubtractDisabled,
    increment,
    decrement,
    handleManualChange,
  } = useCounter({ controlledValue: value, onChange, defaultValue, min, max })
  return (
    <Box>
      <IconButton disabled={isSubtractDisabled} onClick={decrement}>
        <Remove />
      </IconButton>
      <input
        type="text"
        value={count}
        onChange={(e) => handleManualChange(e.target.value)}
      />
      <IconButton disabled={isAdditionDisabled} onClick={increment}>
        <Add />
      </IconButton>
    </Box>
  )
}

export default Counter
