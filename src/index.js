import app from './app'
// require('dotenv').config({path: 'variables.env'})
import dbConexion from './config/db'

    console.log("production");
    const mongoEnvPro = "mongodb+srv://bls:adminBls@bls.kanrls4.mongodb.net/BLS";
    dbConexion(mongoEnvPro) 
    //const server = http.createServer(app);
    app.listen({port:process.env.port||5000},()=>{
        console.log(`Servidor Levantado en el puerto 5000`);
    }); 