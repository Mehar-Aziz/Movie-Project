import React, { useEffect } from "react";
import movieaApi from "../common/apis/movieaApi";
import { APIkey } from "../common/apis/MovieApiKey";
import MovieListing from "./MovieListing";

const Home = ()=>{
    useEffect(() =>{
        const fetchMovies = async() => {
            const response = await movieaApi.get(`movie?api_key=${APIkey}`);
            console.log(response.data.results);
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