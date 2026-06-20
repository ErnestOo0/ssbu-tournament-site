import express, { Application, Request, Response } from 'express';
const cors = require('cors');

const app: Application = express();
app.use(cors())
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.json({txt:'Hello, TypeScript + Express!'});
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});