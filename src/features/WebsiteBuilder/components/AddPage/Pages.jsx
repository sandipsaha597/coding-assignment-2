import { Paper } from '@mui/material'
import { usePages } from '../../hooks/usePages/usePages'

const Pages = () => {
  const { pages, activePageId, changeActivePage } = usePages()
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
          cursor: 'pointer',
        }}
      ></Paper>
    )
  })
}

export default Pages
