import { config } from '../../config.js';

export async function showAll(req, res){
    const page = req.query.page || 1;
    const M_TYPE = req.query.M_TYPE;
    const M_NAME = req.query.M_NAME
    const url = M_NAME
        ? `${config.base}/main/medicine?page=${page}&M_NAME=${M_NAME}&M_TYPE=${M_TYPE}`
        : `${config.base}/main/medicine`;
    fetch(url)
    .then(response => response.json())
    .then(mediList => {
        console.log(mediList);
        res.render('../public/ejs/main/medicine', { list: mediList.rows, count: mediList.count });
    });
}

export async function searchDetail(req, res){
    const page = req.query.page || 1
    const M_NUM = req.query.M_NUM;
    const M_NAME = req.query.M_NAME;
    const M_TYPE = req.query.M_TYPE;
    const M_CORP = req.query.M_CORP;
    const M_MARK = req.query.M_MARK;    
    const M_COLOR = req.query.M_COLOR;
    const M_CHARACTER = req.query.M_CHARACTER;
    const url = {M_NUM, M_NAME, M_CORP, M_TYPE, M_MARK, M_COLOR, M_CHARACTER}
    ? `${config.base}/main/medicine/search?page=${page}&M_NUM=${M_NUM}&M_NAME=${M_NAME}&M_TYPE=${M_TYPE}&M_CORP=${M_CORP}&M_MARK=${M_MARK}&M_COLOR=${M_COLOR}&M_CHARACTER=${M_CHARACTER}`
    : `${config.base}/main/medicine/search`;
fetch(url)
    .then(mediList => {
        console.log(mediList);
        res.render('../public/ejs/main/searchPill'), { list: mediList.rows, count: mediList.count }})
    .catch(error => {
        console.error(error);
    });
}