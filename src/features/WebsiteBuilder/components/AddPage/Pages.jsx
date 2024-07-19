import { Paper } from '@mui/material'
import { useWebsiteBuilder } from '../../hooks/useWebsiteBuilder/useWebsiteBuilder'

const Pages = () => {
  const { pages, activePageId, changeActivePage } = useWebsiteBuilder()
  return pages.map((page, i) => {
    const activePage =
      activePageId === '' && i === 0
        ? true
        : activePageId === page.id
        ? true
        : false
    return (
      <Paper
        onClick={() => changeActivePage(page.id)}
        key={page.id}
        sx={{
          minWidth: 200,
          height: 100,
          outline: activePage ? '2px solid dodgerblue' : '',
        }}
      ></Paper>
    )
  })
}

export default Pages
