import { createApi } from 'unsplash-js'

export default unsplash = async (req, res) => {
    /* 
    Documentation for integration with Unsplash: https://unsplash.com/documentation 
    API requests a random picture from unsplash with a specific top
    */
    const { slug } = req.query; //topic requested
    const params = JSON.parse(slug);
    const unsplash = createApi({ accessKey: process.env.UNSPLASH_ACCESS_KEY }); //unsplash initialization
    return await unsplash.photos.getRandom({ query: params }).then(result => {
        if (result.errors) {
            res.status(result.status).json({ error: 'failed to load data' });
        } else {
            res.status(result.status).json(result.response);
        }
    }).catch(error => {
        res.status(500).json({ error: error });
    });
};
