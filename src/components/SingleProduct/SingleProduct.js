import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Btn from "../../components/Btn/Btn";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 665,
  },
  media: {
    height: 160,
  },
}));

export default function SingleProduct({ product }) {
  const classes = useStyles();
  const { title, image, description, price } = product;

  return (
    <Card className={classes.root}>
      <Link to={`/details/${product.id}`}>
        <CardMedia
          style={{ objectFit: "contain" }}
          component="img"
          className={classes.media}
          image={image}
          title={title}
        />
      </Link>

      <CardContent style={{ height: "250px", overflowY: "scroll" }}>
        <Typography
          gutterBottom
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
        <p
          style={{
            fontSize: "20px",
            fontFamily: "-webkit-body",
            color: "#3f51b5",
          }}
        >
          {price} $
        </p>
      </CardContent>
      <Btn />
    </Card>
  );
}
