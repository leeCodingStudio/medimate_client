import express from 'express';
import adminRouter from './router/admin/admin.js';
import { config } from './config.js';

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/admin', adminRouter);

app.listen(config.port);