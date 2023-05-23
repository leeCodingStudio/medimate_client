import express from 'express';
import adminRouter from './router/admin/admin.js';
import { config } from './config.js';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/admin', adminRouter);

app.listen(config.port);