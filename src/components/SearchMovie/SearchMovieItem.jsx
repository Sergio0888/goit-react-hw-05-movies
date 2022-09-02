import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SearchMovieItem = ({items}) => {

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

export default SearchMovieItem;
