import {Routes, Route} from "react-router-dom";
import { Suspense, lazy } from "react";

const Homepage = lazy(() => import("pages/HomePage/Homepage"));
const Moviespage = lazy(() => import("pages/MoviesPage/Moviespage"));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage/MovieDetails"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>Loading</p>}>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/movies" element={<Moviespage />}></Route>
                <Route path="/movies/:id" element={<MovieDetailsPage />}>
                    <Route path="cast" element={<Cast />}></Route>
                    <Route path="reviews" element={<Reviews />}></Route>
                </Route>
            </Routes>
        </Suspense>
    )
};

export default UserRoutes;