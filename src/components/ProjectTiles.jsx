import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"
import Anchor from "./Anchor"

export default function MultiActionAreaCard({
  image,
  title,
  description,
  link,
}) {
  title = title.replace(/-/g, " ")

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          // alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="Typography"
          >
            {title}
          </Typography>
          <Typography
            color="text.secondary"
            className="Typography"
            variant="h10"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Anchor target={link}>
          <Button size="small" color="primary">
            View Poject
          </Button>
        </Anchor>
      </CardActions>
    </Card>
  )
}
