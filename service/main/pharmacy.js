import { config } from '../../config.js';

export async function showAll(req, res) {
    const page = req.query.page || 1;
    const P_ADDRESS = req.query.P_ADDRESS;
    const P_NAME = req.query.P_NAME;
    const url = P_NAME 
    ? `${config.base}/main/pharmacy?page=${page}&P_ADDRESS=${P_ADDRESS}&P_NAME=${P_NAME}`
    : `${config.base}/main/pharmacy`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(pharmList => {
            console.log(pharmList);
            res.render('../public/ejs/main/pharmacy', { list: pharmList.rows, count: pharmList.count })
        });
}
