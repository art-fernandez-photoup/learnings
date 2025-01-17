import * as dotenv from "dotenv";
import express, { application } from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/item.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
import connect from "./utils/dbconnect";

dotenv.config();

if(!process.env.PORT){
    process.exit(1)
}

const app = express();
const PORT:number = parseInt(process.env.PORT as string, 10);

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/menu/items', itemsRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
    console.log('Listening at ', PORT);
    connect();
});