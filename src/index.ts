import * as dotenv from "dotenv";
import express, { application } from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

if(!process.env.PORT){
    process.exit(1)
}

const app = express();
const PORT:number = parseInt(process.env.PORT as string, 10);

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/', (req, res) => {
    return res.json('Hello World!');
});

app.listen(PORT, () => {
    console.log('Listening at ', PORT);
});