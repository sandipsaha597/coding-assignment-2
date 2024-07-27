import { Box, Button } from '@mui/material'
import NavbarItemAndLinkEditInputs from './NavbarItemAndLinkEditInputs'
import { useNavbar } from '../../../hooks/useNavbar/useNavbar'

const NavbarItemAndLinksEditForm = () => {
  const { navbar, addItemInNavbar, updateItemInNavbar } = useNavbar()
  const navbarItems = navbar.items

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
        {navbarItems.map((item) => {
          return (
            <NavbarItemAndLinkEditInputs
              key={item.id}
              item={item}
              onChange={(updatedData) =>
                updateItemInNavbar(item.id, updatedData)
              }
            />
          )
        })}
      </Box>
      <Button
        variant="contained"
        sx={{ alignSelf: 'flex-end' }}
        onClick={addItemInNavbar}
      >
        Add item
      </Button>
    </Box>
  )
}

export default NavbarItemAndLinksEditForm
