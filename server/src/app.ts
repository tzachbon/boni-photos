import { json, urlencoded } from 'body-parser';
import express from 'express';
import path from 'path';
import { headersController } from './controller/headers.controller';
import { healthCheckController } from './controller/health-check.controller';
import contactRoutes from './routes/contact.routes';
import { Counter } from './util/counter.util';

const counter = new Counter();
const app: express.Application = express();
const port = process.env.PORT || 3088;

app.use('/', express.static(path.join(__dirname, 'frontend')));
app.use(urlencoded({ limit: '500mb', extended: true }));
app.use(headersController);

// API
app.use('/api', json({ limit: '500mb' }));
app.use('/api/contact-us', contactRoutes);
app.use('/api', healthCheckController);
app.use('/', async (req, res, next) => {
  counter.updateCounter();
  next();
});

app.use('/',
  (req, res, next) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
  }
);




app.listen(port);
console.log(`Listening to ${port}`);
