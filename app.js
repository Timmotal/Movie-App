const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// because it's a dummy project we wont be hiding our "API KEYS"
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

const main = document.getElementById('main');

const form = document.getElementById('form');

const search = document.getElementById('search');

// initially get fav movies, by popularity as inluded in the "APIURL"
getMovies(APIURL);

// git commit -am '

async function getMovies(url) {
    const resp = await fetch (url); 4
    const respData = await resp.json();
    showMovies(respData.results);
}