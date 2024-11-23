import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";

const app = express()
Hello(app);
app.use(cors()); 
app.use(express.json());
Lab5(app);
UserRoutes(app);
app.listen(4000)