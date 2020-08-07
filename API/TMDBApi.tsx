// API/TMDBApi.js

const API_TOKEN: string = "076bd4ffd64583d4f76ed71735b26618";

export function getFilmsFromApiWithSearchedText(text : string) {
// export function getFilmsFromApiWithSearchedText(text : string) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}