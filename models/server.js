const express = require('express');
const cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.pathUsers = '/api/users';

        //Middlewares
        this.middlewares();


        //Routes aplication
        this.routes();
    }

    middlewares(){

        //CORS
        this.app.use(cors())

        //Body Parser lectura y parseo de body
        this.app.use(express.json());

        //Directorio carpeta public
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.pathUsers, require('../routes/user'));
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Server is running on port', this.port);
        } );
    }

}
module.exports = Server;
