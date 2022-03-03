import axios from "axios";
const KEY = 'AIzaSyBZNSr_9onoAliiSA6ub3lQbcnx94DIMBc' ;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        manResult: 5,
        key:KEY
    }
});