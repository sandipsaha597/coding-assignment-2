import ExpandMoreIconMUI from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { produce } from 'immer'
import _ from 'lodash'
import { useMemo, useState } from 'react'
import { Counter } from '../../../../components/Counter'
import { detectDuplicateSlug } from '../../../../core/utilFunctions'
import { doesItemExist } from '../../../../utils/functions'
import { useNavbar } from '../../hooks/useNavbar/useNavbar'
import { usePages } from '../../hooks/usePages/usePages'
import { homePageId } from '../../schemaGenerator/constants'
import { ColorPickerDropdown } from '../customDropdowns/ColorPickerDropdown'
import { getColorPickerDropdownValueFromColorStructure } from '../customDropdowns/ColorPickerDropdown/core/functions'
// import { detectDuplicateSlug } from '../../../../core/utilFunctions'

const NavigationSettings = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIconMUI />}
        id="navigation control"
      >
        Navigation control
      </AccordionSummary>
      <AccordionDetails>
        <NavigationStyles />
        <NavbarItemsAndLinksAccordion />
        <PagesDetailsAccordion />
      </AccordionDetails>
    </Accordion>
  )
}

export default NavigationSettings

const colorChangeArr = [
  {
    id: '1',
    property: 'backgroundColor',
    label: 'Background Color',
  },
  {
    id: '2',
    property: 'itemColor',
    label: 'Item Color',
  },
  {
    id: '3',
    property: 'activeItemColor',
    label: 'Active Item Color',
  },
]

const NavigationStyles = () => {
  const { navbar, updateNavbarStyles } = useNavbar()
  const navbarStyles = navbar.styles

  const handleFormChange = (styleProperty, changedValues) => {
    /* lodash merge function changes the original object that's why we need to create a 
    draftState to merge changedValues with it */
    const newDataObj = produce(navbar.styles[styleProperty], (draftState) => {
      return _.merge(draftState, changedValues)
    })
    // calling the updateNavbarStyles function with styleProperty and new values

    updateNavbarStyles(styleProperty, newDataObj)
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIconMUI />}>
        Navigation Styles
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
          <Grid container rowSpacing={2}>
            {colorChangeArr.map((v) => {
              return (
                <ColorPickerDropdown
                  key={v.id}
                  value={getColorPickerDropdownValueFromColorStructure(
                    navbarStyles[v.property]
                  )}
                  dropdownLabel={v.label}
                  customColor={navbarStyles[v.property].value}
                  onChange={(changeObj) =>
                    handleFormChange(v.property, changeObj)
                  }
                />
                // <ColorPickerWithLabel
                //   key={v.id}
                //   color={navbarStyles[v.property]}
                //   label={v.label}
                // />
              )
            })}
          </Grid>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputLabel htmlFor="navbar-items-gap-counter">Gap:</InputLabel>
            <Counter
              inputId={'navbar-items-gap-counter'}
              min={0}
              value={Number(
                navbarStyles['gap'].slice(0, navbarStyles['gap'].length - 2)
              )}
              onChange={(value) => updateNavbarStyles('gap', value + 'px')}
            />
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

const NavbarItemsAndLinksAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIconMUI />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        Menu items and links
      </AccordionSummary>
      <AccordionDetails>
        <NavbarItemAndLinksEditForm />
      </AccordionDetails>
    </Accordion>
  )
}

const PagesDropdownSelect = ({ value, onChange }) => {
  const { pages } = usePages()

  const doesPageExist = useMemo(
    () => doesItemExist(value, pages),
    [value, pages]
  )

  return (
    <FormControl fullWidth>
      <InputLabel>To</InputLabel>
      <Select
        value={doesPageExist ? value : homePageId}
        label="To"
        onChange={onChange}
      >
        {pages.map((page) => {
          const pageId = page.id
          const { title, slug } = page.pageDetails
          return (
            <MenuItem key={page.id} value={pageId}>
              {`${title} -  /${slug}`}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

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
      <PagesDropdownSelect
        value={item.to}
        onChange={(e) => {
          handleChange('to', e.target.value)
        }}
      />
    </Box>
  )
}

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

const PagesDetailsAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIconMUI />}>
        Pages
      </AccordionSummary>
      <AccordionDetails>
        <PagesDetailsEditForm />
      </AccordionDetails>
    </Accordion>
  )
}

const PageDetailsEditInputs = ({ pages, index, onDataChange }) => {
  const page = pages[index]
  const pageTitle = page.pageDetails.title
  const pageDescription = page.pageDetails.description
  const pageSlug = page.pageDetails.slug

  const [slugErrText, setSlugErrText] = useState('')
  const validCharRegex = /^[a-zA-Z0-9-]*$/

  const handlePageDataChange = (pageId, key, value) => {
    if (key === 'slug') {
      if (!validCharRegex.test(value)) {
        setSlugErrText('Only Alphabets, numbers and hyphens are allowed')
        return
      }

      const [, index] = detectDuplicateSlug(value, pageId, pages)
      const isDuplicate = index === -1 ? false : true
      if (isDuplicate) {
        setSlugErrText('Duplicate slug detected')
        return
      }
      setSlugErrText('')
    }
    const details = {
      ...page.pageDetails,
      [key]: value,
    }
    onDataChange(pageId, details)
  }
  return (
    <Grid
      key={page.id}
      item
      xs={12}
      sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
    >
      <TextField
        label="Page name"
        value={pageTitle}
        fullWidth
        size="small"
        onChange={(e) => handlePageDataChange(page.id, 'title', e.target.value)}
      />
      <TextField
        label="Page description"
        value={pageDescription}
        fullWidth
        multiline
        rows={4}
        size="small"
        onChange={(e) =>
          handlePageDataChange(page.id, 'description', e.target.value)
        }
      />
      <TextField
        label="Page slug"
        defaultValue={pageSlug}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ marginRight: '1px' }}>
              /
            </InputAdornment>
          ),
        }}
        fullWidth
        size="small"
        disabled={index === 0}
        onChange={(e) => handlePageDataChange(page.id, 'slug', e.target.value)}
        error={!!slugErrText}
        helperText={slugErrText}
      />
    </Grid>
  )
}
