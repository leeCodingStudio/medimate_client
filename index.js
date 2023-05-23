import express from 'express';
import adminRouter from './router/admin/admin.js';
import mainRouter from './router/main/main.js';
import { config } from './config.js';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/admin', adminRouter);
app.use('/main', mainRouter);

// 에러 페이지
app.use((req, res, next) => {
    res.sendStatus(404)
});
app.use((error, req, res, next) => {
    console.log(error)
    res.sendStatus(500)
});


app.listen(config.port);