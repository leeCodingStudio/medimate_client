
import { config } from '../../config.js';
import * as TokenStorage from '../../token.js'

const token = TokenStorage.getToken()
const aut2 = `Bearer ${token}`

export async function showAll(req, res) {
    fetch(config.base + '/main/login')
        .then(response => response.json())
        .then(res => console.log(res))
        .then(res.render('../public/ejs/main/login'));
}

export async function login(req, res) {
    const { U_ID, U_PW } = req.body
    fetch(config.base + '/main/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            U_ID: U_ID,
            U_PW: U_PW
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            TokenStorage.saveToken(data.token)
        })
        .then(()=> res.redirect('/main/index'))
        .catch(error => {
            console.error(error);
        });
};