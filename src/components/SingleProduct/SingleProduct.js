import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 665,
  },
  media: {
    height: 255,
  },
}));

export default function SingleProduct({ product }) {
  const classes = useStyles();
  const { title, image, description, price } = product;

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="p"
          component="p"
          style={{
            fontSize: "20px",
            fontFamily: "-webkit-body",
            color: "#3f51b5",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ textAlign: "justify" }}
        >
          {description}
        </Typography>
        <span
          style={{
            fontSize: "20px",
            fontFamily: "-webkit-body",
            color: "#3f51b5",
          }}
        >
          {price} $
        </span>
      </CardContent>
    </Card>
  );
}
