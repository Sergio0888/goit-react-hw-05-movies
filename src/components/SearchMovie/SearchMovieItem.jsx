import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const SearchMovieItem = ({items}) => {
    console.log(items)

    const location = useLocation();

    const elements = items.map(({title, name, id}) => (
        <li key={id}>
            <Link state={{ from: location}} to={`/movies/${id}`}>{title || name}</Link>
        </li>
    ));
    
    return (
        <ul>
            {elements}
        </ul>
    )
};

SearchMovieItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.number.isRequired
    }))
};

export default SearchMovieItem;
