import { IoSearch } from 'react-icons/io5';
import { StyledButton } from './SharedStyles';

export const Search: React.FC<{ type }> = ({type}) => {

    return (
      <StyledButton variant={type}>
        <IoSearch size={25} />
      </StyledButton>
    );
};

export default Search;