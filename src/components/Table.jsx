import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { IconButton } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { ProductData } from "../mockData/ProductData";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const rows = ProductData.map((row) => row);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function CustomizedTables() {
  const navigate = useNavigate();
  const classes = useStyles();
  const handleClick = (e) => {
    const id = e.currentTarget.dataset.id;
    navigate(`/details/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Identificador</StyledTableCell>
            <StyledTableCell align="left">Nombre</StyledTableCell>
            <StyledTableCell align="center">Fecha y hora</StyledTableCell>
            <StyledTableCell align="center">Comentario</StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
            <StyledTableCell align="right">Detalle</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Id}>
              <StyledTableCell component="th" scope="row">
                {row.Id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.dateTime}</StyledTableCell>
              <StyledTableCell align="center">{row.comment}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton
                  data-id={row.Id}
                  onClick={handleClick}
                  color="inherit"
                >
                  <VisibilityIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTables;
