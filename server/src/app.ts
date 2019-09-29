import { json, urlencoded } from 'body-parser';
import contactRoutes from './routes/contact.routes';
import { healthCheckController } from './controller/health-check.controller';
import { headersController } from './controller/headers.controller';
import express from 'express';
import { Counter } from './util/counter.util';
import path from 'path';

const counter = new Counter();
const app: express.Application = express();
const port = process.env.PORT || 3088;

app.use(json({ limit: '500mb' }));
app.use(urlencoded({ limit: '500mb', extended: true }));
app.use(headersController);
app.use('/api/contact-us', contactRoutes);
app.use('/api', healthCheckController);
app.use('/', async (req, res, next) => {
  counter.updateCounter();
  next();
});
app.use('/', express.static(path.join(__dirname, 'frontend')));


app.listen(port);
console.log(`Listening to ${port}`);
