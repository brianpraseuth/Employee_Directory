import React from 'react'

export default function EmCell(props) {
    return (
        <div>
            <TableRow key={row.name}>
              <TableCell align="right">{props.image}</TableCell>
              <TableCell align="right">{props.name}</TableCell>
              <TableCell align="right">{props.phone}</TableCell>
              <TableCell align="right">{props.email}</TableCell>
              <TableCell align="right">{props.dob}</TableCell>
            </TableRow>
        </div>
    )
}
