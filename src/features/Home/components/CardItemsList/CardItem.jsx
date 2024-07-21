import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

const CardItem = ({ cardData, renderCardActions }) => {
  return (
    <Card sx={{ p: 1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardData.projectName}
        </Typography>
      </CardContent>
      <CardActions>{renderCardActions(cardData)}</CardActions>
    </Card>
  )
}

export default CardItem
