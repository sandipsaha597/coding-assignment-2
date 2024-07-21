import { Grid } from '@mui/material'

import CardItem from './CardItem'

const CardItemList = ({ items, renderCardActions, ...props }) => {
  return (
    <Grid container spacing={2} {...props}>
      {items.map((item) => (
        <Grid item key={item.id} xs={3}>
          <CardItem cardData={item} renderCardActions={renderCardActions} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CardItemList
