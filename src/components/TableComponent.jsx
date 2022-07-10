import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Item from './Item';

const TableComponent = ({ data }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Дата</TableCell>
                        <TableCell>Название</TableCell>
                        <TableCell>Количество</TableCell>
                        <TableCell>Расстояние</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{data.length && data.map((item, index) => <Item {...item} key={index} />)}</TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableComponent;
