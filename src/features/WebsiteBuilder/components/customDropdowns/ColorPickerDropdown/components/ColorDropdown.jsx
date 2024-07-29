import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import { ColoredBox } from '../../../../../../components/ColoredBox/ColoredBox'
import { useProjectThemeAndGlobalStyle } from '../../../../hooks/useProjectThemeAndGlobalStyles/useProjectThemeAndGlobalStyles'
import { COLOR_TYPES } from '../../../../schemaGenerator/types/colorTypes'
import { handleTempChange } from '../../functions/handleTempChange'

const MenuItemBox = ({ color, name }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <ColoredBox color={color} sx={{ minWidth: 25 }} />
      <Typography
        sx={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {name}
      </Typography>
    </Box>
  )
}

export const ColorDropdown = ({
  value,
  onChange,
  customColor,
  dropdownLabel = 'Color',
}) => {
  const { themeAndGlobalStyles } = useProjectThemeAndGlobalStyle()

  // const tempChange = (id) => {
  //   const [item] = getItemById(id, )
  // }

  return (
    <FormControl fullWidth>
      <InputLabel>{dropdownLabel}</InputLabel>
      <Select
        value={value}
        label={dropdownLabel}
        onChange={(e) => {
          if (
            e.target.value === COLOR_TYPES.CUSTOM ||
            e.target.value === COLOR_TYPES.INHERIT
          ) {
            onChange({ type: e.target.value, value: '#000' })
            return
          }
          onChange({ type: COLOR_TYPES.ID, value: e.target.value })
          // const [colorObj, index] = getItemById(
          //   e.target.value,
          //   themeAndGlobalStyles.theme
          // )
          // if (index === -1) {
          //   console.error('Chosen theme color id does not exist')
          //   return
          // } else {
          // }
        }}
      >
        {/* {showGlobal && (
          <MenuItem value={COLOR_TYPES.INHERIT} handleTempChange>
            <MenuItemBox name={'Global Color'} color={'inherit'} />
          </MenuItem>
        )}
        <MenuItem value={COLOR_TYPES.CUSTOM}>
          <MenuItemBox name={'Custom Color'} color={customColor} />
        </MenuItem> */}

        {[
          {
            id: COLOR_TYPES.INHERIT,
            name: 'Global Color',
            color: 'inherit',
          },
          {
            id: COLOR_TYPES.CUSTOM,
            name: 'Custom Color',
            color: customColor,
          },
          ...themeAndGlobalStyles.theme,
        ].map((v) => {
          return (
            <MenuItem
              key={v.id}
              value={v.id}
              {...handleTempChange(v.color, onChange)}
            >
              <MenuItemBox name={v.name} color={v.color} />
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}
