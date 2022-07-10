import { TableCell, TableRow } from '@mui/material';
import React from 'react';

const Item = ({ date, name, count, distance }) => {
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={name}>
            <TableCell>{date.substring(0, 10)}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{count}</TableCell>
            <TableCell>{distance}</TableCell>
        </TableRow>
    );
};

export default Item;
