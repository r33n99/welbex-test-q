import React from 'react';
import { NavLink } from 'react-router-dom';
import { Stack, Pagination, PaginationItem } from '@mui/material';
const Paginator = ({ itemsPerPage, totalItems, page, setCurrentPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <>
            <Stack sx={{ m: 2 }} spacing={2}>
                <Pagination
                    page={page}
                    count={totalPages}
                    onChange={(_, num) => setCurrentPage(num)}
                    renderItem={(item) => <PaginationItem component={NavLink} to={`/${item.page}`} {...item} />}
                />
            </Stack>
        </>
    );
};

export default Paginator;
