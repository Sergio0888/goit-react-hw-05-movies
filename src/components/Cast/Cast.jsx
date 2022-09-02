import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfo } from "api/movies";

import styles from "./cast.module.css";

const Cast = () => {

    const [state, setState] = useState([]);
    const [error, setError] = useState(null); 

    const {id} = useParams();

    useEffect(() => {
        const fetchCast = async() => {
            try {
                setError(null);
                const {cast} = await getInfo(id, "credits");
                setState(cast)
            } 
            catch (error) {
                setError(error)  
            }
        }
        fetchCast()
    }, [setState, id]);

    const elements = state.map(({cast_id, name, character, profile_path}) => (
        <li key={cast_id}>
            <img 
            className={styles.image}
            src={profile_path && `https://image.tmdb.org/t/p/w500${profile_path}`} 
            alt="Text"/>
            <p>{name}</p>
            <p>Character: {character}</p>
        </li>
    ))

    return (
        <ul className={styles.list}>
            {error && <p>Не удалось загрузить список актёров</p>}
            {elements}  
        </ul>
    )
};

export default Cast;