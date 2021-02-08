import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
  const { id, title, image, description, price } = product;
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={title} />
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
