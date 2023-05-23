import express from 'express';
import bodyParser from 'body-parser';
import adminRouter from './router/admin/admin.js';
import { config } from './config.js';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/admin', adminRouter);

// 에러 페이지
app.use((req, res, next) => {
    res.sendStatus(404)
});
app.use((error, req, res, next) => {
    console.log(error)
    res.sendStatus(500)
});

app.listen(config.port);