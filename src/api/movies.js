import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "acac2c28c74cf2eb9836514863746de7"
    }
});

export const getTrendMovies = async() => {
    const {data} = await instance.get("/trending/all/day");
    return data
};

export const getMoviesById = async(id) => {
    const {data} = await instance.get(`/movie/${id}`)
    return data
};

export const getSearchMovie = async(query) => {
    const {data} = await instance.get("/search/movie", {
        params: {
            query
        }
    })
    return data
};

export const getInfo = async(id, params) => {
    const {data} = await instance.get(`/movie/${id}/${params}`)
    return data;
}