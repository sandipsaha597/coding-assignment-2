import { Paper } from '@mui/material'
import { useWebsiteBuilder } from '../../hooks/useWebsiteBuilder/useWebsiteBuilder'

const Pages = () => {
  const { pages, activePageId, changeActivePage } = useWebsiteBuilder()
  return pages.map((page) => {
    return (
      <Paper
        onClick={() => changeActivePage(page.id)}
        key={page.id}
        sx={{
          minWidth: 200,
          height: 100,
          outline: activePageId === page.id ? '2px solid dodgerblue' : '',
          pointerEvents: 'auto',
        }}
      ></Paper>
    )
  })
}

export default Pages
