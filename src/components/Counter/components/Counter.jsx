import { Add, Remove } from '@mui/icons-material'
import { Box, IconButton, OutlinedInput } from '@mui/material'
import { useCounter } from '../hooks/useCounter'

const Counter = ({ value, defaultValue, onChange, min, max, inputId }) => {
  const {
    count,
    isAdditionDisabled,
    isSubtractDisabled,
    increment,
    decrement,
    handleManualChange,
  } = useCounter({ controlledValue: value, onChange, defaultValue, min, max })

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton disabled={isSubtractDisabled} onClick={decrement}>
        <Remove />
      </IconButton>
      <OutlinedInput
        id={inputId}
        size="small"
        sx={{ input: { textAlign: 'center', width: '45px' } }}
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
