import express, { Application, Request, Response } from 'express';
const cors = require('cors');

const app: Application = express();
app.use(cors())
const PORT = 8080;

app.get('/', (req: Request, res: Response) => {
  res.json({txt:'Hello, serveur running very well, TypeScript + Express!'});
});

app.listen(PORT, () => {
  console.log(`hello, you can find the super Server running at http://localhost:${PORT}, have a good day <3`);
});