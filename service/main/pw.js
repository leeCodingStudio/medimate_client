import { config } from '../../config.js';
import * as TokenStorage from '../../token.js'


export async function show(req, res) {
    res.render('../public/ejs/main/mypagePw',{flag: false,success:false});
}

export async function changepw(req,res){
    const {OLD_PW,U_PW} = req.body
    fetch(config.base + '/main/mypage/pw',{
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({
            OLD_PW:OLD_PW,
            U_PW:U_PW
        })
    })
    .then(response=>response.json())
    .then((data)=> {
        if(!data.message && data.success){
            res.render('../public/ejs/main/mypagePw',{ success:true ,flag:false })
        }else{
            res.render('../public/ejs/main/mypagePw',{ flag:true,success:false })
        }
    })
    .catch(error => {});
}


function getHeaders() {
    const token = TokenStorage.getToken();
    console.log(token);
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    };
}