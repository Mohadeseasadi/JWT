import express from "express";
import sequelize from "./config/database";
import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config()
 
const app = express();
const port = process.env.PORT

sequelize.authenticate()
    .then(()=>console.log('cdatabase connected !'))
    .catch((err) => console.log('Error : ' , err))

app.listen(port , ()=> console.log(`Server is runnig on port ${port}`))