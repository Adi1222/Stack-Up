const app = require('./app')
//const server = require('./app').server

const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

const connect = () => {
    return mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
}


if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    })
    connect();
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Connection Error!'))
    db.once('open', function() {
        console.log('Connection successfull!');
    })

}