
import { config } from '../../config.js';
import * as TokenStorage from '../../token.js'

/* 전체 조회*/
export async function showAll(req, res) {
    const page = req.query.page || 1
    const A_TITLE = req.query.A_TITLE;
    const url =A_TITLE
    ? `${config.base}/admin/announcement?page=${page}&A_TITLE=${A_TITLE}`
    : `${config.base}/admin/announcement?page=${page}`;

    fetch(url, {headers: getHeaders()})
        .then(response => response.json())
        .then(AnnouncementList => {
            console.log(getHeaders());
            res.render('../public/ejs/admin/adminAnnouncement', { AnnouncementList });
        });
}

/* 상세보기(html이동이라 새로 만듬) */
export async function showOne(req, res) {
    const A_NUM = req.params.id;
    const url = A_NUM
    ? `${config.base}/admin/announcement/${A_NUM}`
    : `${config.base}/admin/announcement`;

    fetch(url, {headers: getHeaders()})
        .then(response => response.json())
        .then(AnnouncementList => {
            console.log(getHeaders());
            res.render('../public/ejs/admin/adminAncmEdit', { AnnouncementList});
        });
    }

export async function showWrite(req,res) {
    res.render('../public/ejs/admin/adminAncmEdit')
}




function getHeaders() {
    const token = TokenStorage.getToken();
    console.log(token);
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    };
}