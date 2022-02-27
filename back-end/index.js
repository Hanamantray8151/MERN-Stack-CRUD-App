import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

import Routes from './server/route.js';

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

app.use('/users',Routes);

const URL = 'mongodb+srv://admin-hanamantray:test-1234@cluster0.8ric1.mongodb.net/CRUDAPP?retryWrites=true&w=majority';

const PORT = process.env.PORT || 8080;

mongoose.connect(URL)
.then( () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch( (err) => {
    console.log(err);
});
