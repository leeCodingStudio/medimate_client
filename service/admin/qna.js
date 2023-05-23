import { response } from 'express';
import { config } from '../../config.js';
import * as TokenStorage from '../../token.js'


export async function showAll(req, res) {
    fetch(config.base + '/admin/qna', {
        headers: getHeaders()
    })
        .then(response => response.json())
        .then(qnaList => {
            console.log(getHeaders());
            res.render('../public/ejs/admin/adminQnA', { qnaList });
        });
}


export async function create(req, res) {
    const { Q_CONTENT, Q_NUM } = req.body
    fetch('http://localhost:8080/admin/qna', {
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