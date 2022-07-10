import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTable, SelectTable } from './features/tableSlice';
import TableComponent from './components/TableComponent';
import Filters from './components/Filters';
import Paginator from './components/Paginator';
import { CircularProgress, Container } from '@mui/material';

const App = () => {
    const dispatch = useDispatch();
    const { value, column, condition, isLoading, table } = useSelector(SelectTable);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        dispatch(fetchTable());
        setData(table);
    }, []);

    useEffect(() => {
        if (value && column && condition) {
            filterData(condition, value, column);
        } else {
            setData(table);
        }
    }, [value, column, condition]);

    useEffect(() => {
        if (table.length > 1) {
            setData(table);
        }
    }, [table]);

    const filterData = (condition, value, column) => {
        const copyArray = [...data];
        if (condition === 'equals') {
            const filtered = copyArray.filter((item) => item[column] === value.trim());
            setData(filtered);
        }
        if (condition === 'more') {
            const filtered = copyArray.filter((item) => item[column] > value.trim());
            setData(filtered);
        }
        if (condition === 'less') {
            const filtered = copyArray.filter((item) => item[column] < value.trim());
            setData(filtered);
        }
        if (condition === 'contain') {
            const filtered = copyArray.filter((item) => item[column].toString().includes(value.trim()));
            setData(filtered);
        }
    };

    const lastItemIdex = currentPage * itemsPerPage;
    const firstitemIndex = lastItemIdex - itemsPerPage;
    const currentItems = data.slice(firstitemIndex, lastItemIdex);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container>
            {!isLoading ? (
                <>
                    <Filters />
                    {data.length ? <TableComponent data={currentItems} /> : 'ничего не найдено по данному фильтру'}
                    <Paginator
                        setCurrentPage={setCurrentPage}
                        page={currentPage}
                        paginate={paginate}
                        itemsPerPage={itemsPerPage}
                        totalItems={data.length}
                    />
                </>
            ) : (
                <CircularProgress />
            )}
        </Container>
    );
};

export default App;
