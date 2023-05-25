import { config } from '../../config.js';
import * as TokenStorage from '../../token.js'


export async function showAll(req, res) {
    const page = req.query.page || 1
    const Q_TITLE = req.query.Q_TITLE;
    const url = Q_TITLE
    ? `${config.base}/admin/qna?page=${page}&Q_TITLE=${Q_TITLE}`
    : `${config.base}/admin/qna?page=${page}`;

    fetch(url, {headers: getHeaders()})
        .then(response => response.json())
        .then(qnaList => {
            console.log(getHeaders());
            res.render('../public/ejs/admin/adminQnA', { qnaList });
        });
}


export async function create(req, res) {
    const { Q_CONTENT, Q_NUM } = req.body
    fetch(`${config.base}/admin/qna`, {
        method: 'PUT',
        headers:getHeaders(),
        body: JSON.stringify({
            Q_CONTENT: Q_CONTENT,
            Q_NUM: Q_NUM
        })
    })
        .then(response => response.json())
        .then(()=> res.redirect('/admin/qna'))
        .catch(error => {
            // 에러 처리를 수행합니다.
            console.error(error);
        });
};

function getHeaders() {
    const token = TokenStorage.getToken();
    console.log(token);
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    };
}