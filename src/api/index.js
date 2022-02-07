import axios from "axios";
import { loadProgressBar } from 'axios-progress-bar'
loadProgressBar()

export default {
    getGallery(page)
    {
        return axios.get(`http://www.pinkvilla.com/photo-gallery-feed-page/page/${page}`).then(response => {
            return response.data.nodes;
        });
    }
}