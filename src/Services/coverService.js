
const fallbackCover = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
const coverHost = 'https://image.tmdb.org/t/p/original/'

const resolveCover = (coverPath) => {
    return coverPath ? coverHost + coverPath : fallbackCover
}

export default resolveCover