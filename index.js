const express =  require('express');
const app =  express();
const mongoose  = require('mongoose');
const dotenv = require('dotenv');
//import routes
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(err);
    });


//Middlewares
app.use(express.json());

//Route middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(3000,() => console.log('Server up and running'));



