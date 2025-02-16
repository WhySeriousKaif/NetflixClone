import axios from 'axios'
//whenever you arre making rthe req you can append the beginnoing url
const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
export default instance;
