import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTrendMovies } from "api/movies";

const Movies = () => {

    const [state, setState] = useState([]);
    const [error, setError] = useState(null);

    const location = useLocation();


    useEffect(() => {
        const fetchMovies = async() => {
            try {
                setError(null)
                const {results} = await getTrendMovies();
                setState(results)
            } 
            catch (error) {
                setError(error)
            }
        }

        fetchMovies()

    }, [setState])

    const elements = state.map(({title, name, id}) => (
        <li key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>{title || name}</Link>
        </li>
    ))
    return (
        <ul>
            {error && <p>Не удалось загрузить фильмы</p>}
            {elements}
        </ul>
    )

};

export default Movies;