import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { resetFilterData, setFilterData } from '../features/tableSlice';
import { Box, Button, FormControl, InputBase, InputLabel, MenuItem, Select } from '@mui/material';

const Filters = () => {
    const [column, setColumn] = useState('');
    const [condition, setCondition] = useState('');
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    console.log(value);

    const handleSubmit = (e) => {
        setError('');
        e.preventDefault();
        dispatch(setFilterData({ value, condition, column }));
    };

    const resetFilters = (e) => {
        e.preventDefault();
        setColumn('');
        setCondition('');
        setValue('');
        setError('');
        dispatch(resetFilterData());
    };

    const handleChangeValue = React.useCallback((e) => {
        e.preventDefault();
        setValue(e.target.value);
    }, []);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', m: 3 }}>
            {error && <p className="error">{error}</p>}

            <FormControl sx={{ width: '130px' }}>
                <InputLabel variant="filled" id="first">
                    введите символ
                </InputLabel>
                <Select labelId="first" id="first" value={column} onChange={(e) => setColumn(e.target.value)}>
                    <MenuItem value="" disabled>
                        Выберите колонку
                    </MenuItem>
                    <MenuItem value="name">Имя</MenuItem>
                    <MenuItem value="count">Количество</MenuItem>
                    <MenuItem value="distance">Расстояние</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ width: '130px', marginLeft: '15px' }}>
                <InputLabel variant="filled" id="second">
                    введите значение
                </InputLabel>
                <Select labelId="second" id="second" value={condition} onChange={(e) => setCondition(e.target.value)}>
                    <MenuItem value="" disabled>
                        Выберите условие
                    </MenuItem>
                    <MenuItem value="equals">Равно</MenuItem>
                    <MenuItem value="contain">Содержит</MenuItem>
                    <MenuItem value="more">Больше</MenuItem>
                    <MenuItem value="less">Меньше</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1 }} variant="standard">
                <InputBase
                    sx={{ border: '1px solid #ced4da', borderRadius: '4px', p: 1 }}
                    value={value}
                    onChange={handleChangeValue}
                    type="text"
                    placeholder="Введите значение"
                />
            </FormControl>

            <Button
                sx={{ marginRight: '10px' }}
                variant="contained"
                color="success"
                disabled={!value || !column || !condition}
                onClick={handleSubmit}
            >
                Фильтр
            </Button>
            <Button variant="outlined" color="error" onClick={resetFilters}>
                Сбросить
            </Button>
        </Box>
    );
};

export default Filters;
