
import axios from 'axios'

const searchImages = async (queryTerm) => {
    // axios.get('url', { headers: {}, params: {}})
    const result = await axios.get('https://api.unsplash.com/search/photos', { 
        headers: {
            Authorization: 'Client-ID SsWXyzv3RMIQAqmHPuzr8I2Ymkz3nE14lrqZ4VkwygE'
        },
         params: {
            query: queryTerm
         }
    })

    return result;
}

export default searchImages;


