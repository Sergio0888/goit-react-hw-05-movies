import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "api/movies";
import SearchMovieItem from "./SearchMovieItem";


import styles from "./searchmovie.module.css";

const SearchMovie = () => {
    
    const [state, setState] = useState([]);
    const [error, setError] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();

    const q = searchParams.get("query");

    useEffect(() => {
        const searchOfName = async() => {
            try {
                setError(null)
                const {results} = await getSearchMovie(q)
                setState(results)
            } 
            catch (error) {
                setError(error)
            }
        }
        if(q) {
            searchOfName()
        }
    },[setState, q]);

    const onSubmit = (e) => {
        e.preventDefault();
        const query = e.target.input.value;
        setSearchParams({query})
    };
    
    return (
        <div>
            {error && <p>Не удалось загрузить фильм</p>}
            <form onSubmit={onSubmit} className={styles.form}>
                <input name="input" type="text" />
                <button type="submit">Search</button>
            </form>
            <SearchMovieItem items={state}/>
        </div>
        
        
    )
};

export default SearchMovie;