import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CustomizedTables from "./Table";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: "50px",
    width: "70vw",
    marginLeft: "170px",
  },
}));

function Products() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.table}>
        <CustomizedTables />
      </div>
    </>
  );
}

export default Products;
