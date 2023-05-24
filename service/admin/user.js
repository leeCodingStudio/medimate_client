import { config }  from '../../config.js';

export async function showAll(req, res){
    const page = req.query.page || 1
    const U_NAME = req.query.U_NAME;
    const url = U_NAME
        ? `${config.base}/admin/user?page=${page}&U_NAME=${U_NAME}`
        : `${config.base}/admin/user?page=${page}`;

    fetch(url)
    .then(response => response.json())
    .then(datas => {
        res.render('../public/ejs/admin/adminUser', {list:datas.rows, count:datas.count});
    });
}

export async function modify(req, res){
    const { U_NUM, U_ID, U_NAME, U_EMAIL, U_HP } = req.body;

    fetch(config.base+'/admin/user/'+U_NUM, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ U_NUM, U_ID, U_NAME, U_EMAIL, U_HP })
    }).then(() => res.redirect('/admin/user'))
}

export async function drop(req, res){
    const U_NUM = req.params.id;

    fetch(config.base+'/admin/user/'+U_NUM, {
        method: "DELETE"
    }).then(() => res.redirect('/admin/user'))
}