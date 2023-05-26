import { config } from '../../config.js';

export async function showAll(req, res) {
    const page = req.query.page || 1;
    const P_ADDRESS = req.query.P_ADDRESS;
    const P_NAME = req.query.P_NAME;
    const url = P_NAME 
    ? `${config.base}/main/pharm?page=${page}&P_ADDRESS=${P_ADDRESS}&P_NAME=${P_NAME}`
    : `${config.base}/main/pharm`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(pharmList => {
            res.render('../public/ejs/main/drugstore', { list: pharmList.rows, count: pharmList.count })
        });
}