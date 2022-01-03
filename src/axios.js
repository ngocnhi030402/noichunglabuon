import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/550?api_key=60c039bb86c6f48d3d427ccc0712bb88",
});

//instance.get('/foo-bar');

export default instance;