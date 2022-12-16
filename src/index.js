import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
  console.log(req.body);
  return res.status(200).json({ result: 'nice' });
})

app.listen(4000, () => { console.log("listening on 4000") });
