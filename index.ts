import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://matssaaren:9Mbe9h4bCwKTyKSo@cluster0.kk7rlwz.mongodb.net/");
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})
const app: Express = express();
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
import articleController from "./controllers/articleController";

app.use('/', articleController);
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";
app.use('/', authorController);

app.use('/', commentController);

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});