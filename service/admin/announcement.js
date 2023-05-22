import { config }  from '../../config.js';

export async function showAll(req, res){
    fetch(config.base+'/admin/announcement')
    .then(response => response.json())
    .then(list => {
        res.render('../public/ejs/admin/adminAnnouncement', {list});
    });
}