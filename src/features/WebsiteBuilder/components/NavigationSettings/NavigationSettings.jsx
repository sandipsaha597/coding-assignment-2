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
import { useMemo, useState } from 'react'
import { useWebsiteBuilder } from '../../hooks/useWebsiteBuilder/useWebsiteBuilder'
import { detectDuplicateSlug } from '../../../../core/utilFunctions'
import { usePages } from '../../hooks/usePages/usePages'
import { doesItemExist, getItemById } from '../../../../utils/functions'
import { homePageId } from '../../../../store/projectAndTemplatesSlice/projectsAndTemplatesSlice'
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

const NavigationStyles = () => {
  const { navbar } = useWebsiteBuilder()
  const navbarStyles = navbar.styles
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIconMUI />}>
        Navigation Styles
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
          <TextField
            type="text"
            value={navbarStyles.background}
            // onChange={(e) => handleFormChange('src', e.target.value)}
            label="Background"
            variant="outlined"
          />
          <TextField
            type="text"
            value={navbarStyles.itemColor}
            // onChange={(e) => handleFormChange('src', e.target.value)}
            label="Item color"
            variant="outlined"
          />
          <TextField
            type="text"
            value={navbarStyles.activeItemColor}
            // onChange={(e) => handleFormChange('src', e.target.value)}
            label="Active Item Color"
            variant="outlined"
          />
          <TextField
            type="text"
            value={navbarStyles.gap}
            // onChange={(e) => handleFormChange('src', e.target.value)}
            label="Gap"
            variant="outlined"
          />
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
          console.log('pageSelect', pageId, title, slug)
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
    console.log('details nav', details, item)
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
          console.log(e.target.value)
          handleChange('to', e.target.value)
        }}
      />
    </Box>
  )
}

const NavbarItemAndLinksEditForm = () => {
  const { navbar, addItemInNavbar, updateItemInNavbar } = useWebsiteBuilder()
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
  const { pages, updatePageDetails } = useWebsiteBuilder()
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
      console.log('value', value, index, isDuplicate)
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
