import { config } from '../../config.js';
import * as TokenStorage from '../../token.js'


export async function show(req, res) {
    const tokenCheck = TokenStorage.getToken() ? true : false;
    res.render('../public/ejs/main/mypagePw',{flag: false,success:false, tokenCheck});
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
        const tokenCheck = TokenStorage.getToken() ? true : false;
        if(!data.message && data.success){
            res.render('../public/ejs/main/mypagePw',{ success:true ,flag:false, tokenCheck })
        }else{
            res.render('../public/ejs/main/mypagePw',{ flag:true,success:false, tokenCheck })
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