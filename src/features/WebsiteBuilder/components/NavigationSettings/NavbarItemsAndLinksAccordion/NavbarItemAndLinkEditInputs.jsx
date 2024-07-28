import { Box, TextField } from '@mui/material'
import PagesDropdown from '../../customDropdowns/PagesDropdown/PagesDropdown'

const NavbarItemAndLinkEditInputs = ({ item, onChange }) => {
  const handleChange = (key, value) => {
    const details = {
      ...item,
      [key]: value,
    }
    onChange(details)
  }

  return (
    <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
      <TextField
        label="Item title"
        value={item.title}
        size="small"
        fullWidth
        onChange={(e) => handleChange('title', e.target.value)}
      />
      <PagesDropdown
        value={item.to}
        onChange={(e) => {
          handleChange('to', e.target.value)
        }}
      />
    </Box>
  )
}

export default NavbarItemAndLinkEditInputs
