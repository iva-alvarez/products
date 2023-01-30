import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import { ProductData } from "../mockData/ProductData";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    maxWidth: "150px",
    marginLeft: "75px",
  },
  top: {
    marginTop: "50px",
    marginLeft: "40%",
  },
  space: {
    marginTop: "15px",
  },
}));

function DetailProduct() {
  const classes = useStyles();
  const { id } = useParams();

  const { name, dateTime, comment, status, image } = ProductData.find(
    (product) => product.Id === id
  );

  return (
    <>
      <div className={classes.top}>
        <Card className={classes.root}>
          <CardHeader title={name} subheader={dateTime} />
          <CardMedia className={classes.media} image={image} title={name} />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {comment}
            </Typography>
            <Chip
              label={status}
              color="primary"
              variant="outlined"
              className={classes.space}
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default DetailProduct;
