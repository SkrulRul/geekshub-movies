import axios from 'axios'

const host = "https://api.themoviedb.org/3"
const key = { api_key: '210d6a5dd3f16419ce349c9f1b200d6d' }

export const getPopularMovies = async () => {
        console.log('Retrieving top movies list...')
        return axios.get(`${host}/movie/popular`, { params: key })
}

export const searchMovie = async (query) => {
        console.log('Seaching movies for', query)
        return axios.get(`${host}/search/movie`, { params: {...key, query: query }});
}

export const getUpcomingMovies = async () => {
        console.log('Retrieving upcoming movies list...')
        return axios.get(`${host}/movie/upcoming`, { params: key });
}
