import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export default function   TableHoverCharts({rows}) {
  return (
    <div style={{ width: "100%", top: 20, left: 0 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell align="right">Expected Semester</TableCell>
              <TableCell align="right">Sem 1</TableCell>
              <TableCell align="right">Sem 2</TableCell>
              <TableCell align="right">Sem 3</TableCell>
              <TableCell align="right">Sem 4</TableCell>
              <TableCell align="right">Sem 5</TableCell>
              <TableCell align="right">Sem 6</TableCell>
              <TableCell align="right">Sem 7</TableCell>
              <TableCell align="right">Sem 8</TableCell>
              <TableCell align="right">Sem 9</TableCell>
              <TableCell align="right">Sem above</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.course}</TableCell>
                <TableCell align="right">{row.expected_sem}</TableCell>
                <TableCell align="right">{row.sem1}</TableCell>
                <TableCell align="right">{row.sem2}</TableCell>
                <TableCell align="right">{row.sem3}</TableCell>
                <TableCell align="right">{row.sem4}</TableCell>
                <TableCell align="right">{row.sem5}</TableCell>
                <TableCell align="right">{row.sem6}</TableCell>
                <TableCell align="right">{row.sem7}</TableCell>
                <TableCell align="right">{row.sem8}</TableCell>
                <TableCell align="right">{row.sem9}</TableCell>
                <TableCell align="right">{row.sem_above}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
