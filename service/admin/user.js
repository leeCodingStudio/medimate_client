import { config }  from '../../config.js';

export async function showAll(req, res){
    fetch(config.base+'/admin/user')
    .then(response => response.json())
    .then(userList => {
<<<<<<< HEAD
        res.render('../public/ejs/admin/adminUser', {list:userList.rows, count:userList.count});
=======
        res.render('../public/ejs/admin/adminUser', {userList});
>>>>>>> 169b5bfd8b1502d45cca8fcb662959314760b4ba
    });
}