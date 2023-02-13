import app from './app'
// require('dotenv').config({path: 'variables.env'})
import dbConexion from './config/db'

    console.log("production");
    const mongoEnvPro = process.env.DB_MONGO_ATLAS_PRO;
    dbConexion(mongoEnvPro) 
    //const server = http.createServer(app);
    app.listen({port:process.env.PROD_PORT||5001},()=>{
        console.log(`Servidor Levantado en el puerto ${process.env.PROD_PORT}`);
    }); 