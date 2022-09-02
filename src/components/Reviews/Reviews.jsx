import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfo } from "api/movies";

import styles from "./reviews.module.css"

const Reviews = () => {

    const [state, setState] = useState([]);
    const [error, setError] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        const fetchReviews = async() => {
            try {
                setError(null);
                const {results} = await getInfo(id, "reviews");
                setState(results);
            } 
            catch (error) {
                setError(error);
            }
        }
        fetchReviews()
    }, [id, setState]);

    const elements = state.map(({author, content, id}) => (
        <li key={id}>
            <p className={styles.author}>{author}</p>
            <p>{content}</p>
        </li>
    ));

    return (
        <ul>
            {error && <p>Не удалось загрузить отзывы</p>}
            {elements}
        </ul>
    )
};

export default Reviews;