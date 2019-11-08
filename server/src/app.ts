import { urlencoded } from 'body-parser';
import express from 'express';
import { headersController } from './controller/headers.controller';
import { healthCheckController } from './controller/health-check.controller';
import { Counter } from './util/counter.util';
import UserRouter from './routes/user.routes';

export let counter: Counter;
const app: express.Application = express();
const port = process.env.PORT || 3088;

app.use(urlencoded({ limit: '500mb', extended: true }));
app.use(headersController);
app.use('/api/users', UserRouter);
app.use('/api', healthCheckController);


app.use((req, res, next) => {
  res.redirect('https://boni-photos.web.app');
});




app.listen(port, async () => {
  counter = new Counter();
  console.log(`Listening to ${port}`);
});
