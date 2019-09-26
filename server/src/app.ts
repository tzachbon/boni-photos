import express from 'express';
import { json, urlencoded } from 'body-parser';


const app: express.Application = express();
const port = process.env.PORT || 3088;

app.use(json({ limit: '500mb' }));
app.use(urlencoded({ limit: '500mb', extended: true }));


app.listen(port);
console.log(`Listening to ${port}`);
