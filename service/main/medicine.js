import { config } from '../../config.js';

export async function showAll(req, res){
    const page = req.query.page || 1;
    const M_TYPE = req.query.M_TYPE;
    const M_NAME = req.query.M_NAME
    const url = M_NAME
        ? `${config.base}/main/medicine?page=${page}&M_NAME=${M_NAME}&M_TYPE=${M_TYPE}`
        : `${config.base}/main/medicine`;
        console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(mediList => {
        console.log(mediList);
        res.render('../public/ejs/main/medicine', { list: mediList.rows, count: mediList.count });
    });
}