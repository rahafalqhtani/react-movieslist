import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
})
function Movie({ data }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={data.name}
          height="400"
          image={data.image}
          title={data.name}
        />
        <CardContent>
          <Typography
            align="center"
            gutterBottom
            component="h3"
            color="secondary"
          >
            <strong>{data.name}</strong>
          </Typography>
          <Typography gutterBottom component="p">
            <strong>Year</strong>: {data.year}
          </Typography>
          <Typography gutterBottom component="p">
            <strong>Language</strong>: {data.language}
          </Typography>
          <Typography gutterBottom noWrap={true} component="p">
            <strong>Cast</strong>: {data.cast}
          </Typography>
          <Typography gutterBottom component="p">
            <strong>Censor Rating</strong>: {data.rating}
          </Typography>
          <Typography gutterBottom component="p">
            <strong>Genre</strong>: {data.genre}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" fullWidth color="secondary">
          Book
        </Button>
      </CardActions>
    </Card>
  )
}

export default Movie
