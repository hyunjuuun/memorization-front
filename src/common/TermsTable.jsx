import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return {name, calories, fat, carbs, protein};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function TermsTable({headers, terms}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map(header =>
              <TableCell align="right">{header}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {terms.map((term) => (
            <TableRow
              key={term.id}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell align="right">{term.word}</TableCell>
              <TableCell align="right">{term.description}</TableCell>
              <TableCell align="right">{term.keyword1}</TableCell>
              <TableCell align="right">{term.keyword2}</TableCell>
              <TableCell align="right">{term.keyword3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TermsTable;