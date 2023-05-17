import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/contacts/selectors';
import { setFilterValue } from 'redux/contacts/filterSlice';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  const changeFilter = e => {
    const value = e.currentTarget.value.toLowerCase();
    dispatch(setFilterValue(value));
  };
  return (
    <Box>
      <TextField
        label={('margin="none"', 'Find contacts by name')}
        id="filter"
        variant="standard"
        value={filterValue}
        onChange={changeFilter}
        size="small"
      />
    </Box>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
};

export default Filter;
