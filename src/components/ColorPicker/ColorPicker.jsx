import { useState } from 'react'
import { Menu } from '@mui/material'
import Chrome from '@uiw/react-color-chrome'
import { ColoredBox } from '../ColoredBox/ColoredBox'

const ColorPicker = ({ color, onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <ColoredBox
        onClick={handleClick}
        color={color}
        sx={{ width: 35, cursor: 'pointer' }}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ '.MuiList-padding': { padding: '0' } }}
      >
        <Chrome color={color || '#000'} placement="none" onChange={onChange} />
      </Menu>
    </>
  )
}

export default ColorPicker
