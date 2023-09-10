const express = require('express');
const cors = require('cors')
const routerText = require('./routes/Text/TextRouter');
const routerProfile = require('./routes/Profile/ProfileRoute');
const routerTables = require('./routes/Tables/TablesRoute')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose');
const routerTodos = require('./routes/Todos/TodosRouter');

require('dotenv').config()
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,
  optionSuccessStatus:200
}


const app = express()
const PORT = process.env.PORT || 5000
const DB_URL = process.env.MONGO_URL
mongoose.connect(DB_URL).then(()=>console.log('connected')).catch(e=>console.log(e));

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({}))
app.use('/images', express.static('./public'));


app.get("/",(req, res) => {
    res.json({
      message: "Everything is OK!",
      requestData: {
        query: req.query
      },
    });
});



app.use('/api',routerText)
app.use('/api',routerProfile)
app.use('/api',routerTables)
app.use('/api',routerTodos)



app.listen(PORT,() => {
    console.log(`Example app listening on port ${PORT}`)
})

