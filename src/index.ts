import Express, { Request, Response } from 'express';
import router from './api/routes';

const app = Express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express and Typescript Server');
});
app.use(router);

app.listen(8000, () => {
  console.log('Server listening');
});
