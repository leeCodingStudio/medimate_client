import { config }  from '../../config.js';

export async function showAll(req, res){
    fetch(config.base+'/admin/announcement')
    .then(response => {
        return response.json()
    })
    .then(datas => {
        res.render('../public/ejs/admin/adminAnnouncement', {list:datas.rows, count:datas.count});
    });
}