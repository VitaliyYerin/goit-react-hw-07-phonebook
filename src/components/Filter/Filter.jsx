import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { FilterContainer, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

  const handlefilterChange = event => {
    dispatch(filterContact(event.currentTarget.value.trim()));
  };
  return (
    <FilterContainer>
      <label>
        Filter
        <FilterInput type="name" value={filter} onChange={handlefilterChange} />
      </label>
    </FilterContainer>
  );
};

export default Filter;
