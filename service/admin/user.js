import { config }  from '../../config.js';

export async function showAll(req, res){
    fetch(config.base+'/admin/user')
    .then(response => response.json())
    .then(userList => {
        res.render('../public/ejs/admin/adminUser', {userList});
    });
}