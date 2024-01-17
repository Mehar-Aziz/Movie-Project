import React, { useEffect } from "react";
import movieaApi from "../common/apis/movieaApi";
import { APIkey } from "../common/apis/MovieApiKey";
import MovieListing from "./MovieListing";
import { useDispatch } from "react-redux";
import { addMovies } from "../features/movieSlice";

const Home = ()=>{
    const dispatch = useDispatch();
    useEffect(() =>{
        const fetchMovies = async() => {
            const response = await movieaApi.get(`movie?api_key=${APIkey}`);
            dispatch(addMovies(response.data.results));
        };
        fetchMovies();
    }, [])
    return (
        <>
        <div className="banner-img"></div>
        <MovieListing />
        </>
    )
}

export default Home;