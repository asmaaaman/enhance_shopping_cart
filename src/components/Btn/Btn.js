import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Btn() {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "32px" }}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<LibraryAddIcon />}
      >
        ADD TO CART
      </Button>
    </div>
  );
}

export default Btn;
